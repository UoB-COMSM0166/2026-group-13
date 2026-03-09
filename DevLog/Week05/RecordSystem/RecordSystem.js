// RecordSystem.js
// --------------------------------------------------
// 录制模块主控制器
//
// 职责：
// 1. 管理录制系统状态（IDLE / RECORDING / REPLAYING）
// 2. 管理当前录制片段 currentClip
// 3. 负责开始录制、记录逐帧控制意图、停止录制
// 4. 负责开始回放、逐帧输出当前应执行的 InputFrame
//
// 不负责：
// - 不直接移动角色
// - 不直接处理碰撞
// - 不直接处理物理
//
// 这些交给其它外部模块（如 CharacterController / Physics / Collision）
// --------------------------------------------------

class RecordSystem {
  /**
   * @param {number} maxDurationMs - 单次录制允许的最大时长（毫秒）
   */
  constructor(maxDurationMs = 10000) {
    /**
     * 当前录制系统所处模式
     * @type {string}
     */
    this.mode = RecordMode.IDLE;

    /**
     * 当前录制片段
     * 在开始录制前为 null
     * @type {RecordClip|null}
     */
    this.currentClip = null;

    /**
     * 回放进行到第几帧
     * 仅在 REPLAYING 阶段有意义
     * @type {number}
     */
    this.replayIndex = 0;

    /**
     * 当前这轮录制的开始时间（毫秒时间戳）
     * @type {number}
     */
    this.recordStartTime = 0;

    /**
     * 最大录制时长
     * @type {number}
     */
    this.maxDurationMs = maxDurationMs;

    /**
     * 当前录制是否允许被中途打断
     * @type {boolean}
     */
    this.isInterruptible = true;
  }

  /**
   * 开始一轮新的录制
   *
   * @param {number} startX - 录制起点 X
   * @param {number} startY - 录制起点 Y
   */
  startRecording(startX, startY) {
    // 创建新的录制片段
    this.currentClip = new RecordClip(startX, startY);

    // 切换模式为“录制中”
    this.mode = RecordMode.RECORDING;

    // 重置回放索引，确保后续回放从第一帧开始
    this.replayIndex = 0;

    // 记录当前时间，供后续计算录制时长使用
    this.recordStartTime = millis();
  }

  /**
   * 记录当前这一帧的控制意图数据
   *
   * @param {InputFrame} frame
   */
  captureFrame(frame) {
    // 如果当前不是录制状态，直接忽略
    if (!this.isRecording()) return;

    // 如果没有 currentClip，说明录制尚未正确开始
    if (!this.currentClip) return;

    // 将这一帧控制意图加入当前录制片段
    this.currentClip.addFrame(frame);

    // 实时更新录制时长
    this.currentClip.durationMs = millis() - this.recordStartTime;

    // 如果超时，则自动结束录制
    if (this.currentClip.durationMs >= this.maxDurationMs) {
      this.stopRecording();
    }
  }

  /**
   * 结束当前录制
   * 注意：
   * 这里只负责“停止录制”
   * 并不会自动进入回放
   */
  stopRecording() {
    // 只有在录制状态下才能停止录制
    if (!this.isRecording()) return;

    // 最终更新一次录制时长
    if (this.currentClip) {
      this.currentClip.durationMs = millis() - this.recordStartTime;
    }

    // 切回空闲状态
    this.mode = RecordMode.IDLE;
  }

  /**
   * 开始回放当前 clip
   *
   * @returns {boolean}
   * true  = 成功开始回放
   * false = 当前没有可回放的录制片段
   */
  startReplay() {
    // 没有 clip，无法回放
    if (!this.currentClip) return false;

    // clip 存在但为空，也无法回放
    if (this.currentClip.isEmpty()) return false;

    // 切换状态为回放中
    this.mode = RecordMode.REPLAYING;

    // 从第 0 帧开始回放
    this.replayIndex = 0;

    return true;
  }

  /**
   * 回放过程中，每一帧更新一次
   *
   * 它的职责不是“直接控制角色移动”，
   * 而是“返回当前这一帧应执行的控制意图”。
   *
   * 外部模块拿到这个 InputFrame 后，可以：
   * - 转交给 CharacterController
   * - 或直接应用到 clone / replay actor 身上
   *
   * @returns {InputFrame|null}
   */
  updateReplay() {
    // 只有在回放状态下才会返回数据
    if (!this.isReplaying()) return null;

    // 没有 clip，无法回放
    if (!this.currentClip) return null;

    // 取出当前回放索引对应的帧
    const frame = this.currentClip.getFrame(this.replayIndex);

    // 如果 frame 为 null，说明已经回放到末尾
    if (frame === null) {
      // 回放结束后回到空闲状态
      this.mode = RecordMode.IDLE;

      // 重置索引
      this.replayIndex = 0;

      return null;
    }

    // 为下一帧回放做准备
    this.replayIndex++;

    // 返回副本，避免外部直接修改内部保存的数据
    return frame.copy();
  }

  /**
   * 中断当前录制流程
   * 常见用途：
   * - 玩家录到一半，主动按键结束录制
   * - 游戏规则允许提前结束录制并立即进入后续流程
   */
  interrupt() {
    // 如果系统不允许中断，则什么都不做
    if (!this.isInterruptible) return;

    // 只有录制状态下才允许中断录制
    if (!this.isRecording()) return;

    this.stopRecording();
  }

  /**
   * 重置整个录制系统到初始状态
   * 常用于：
   * - 角色死亡重开
   * - 关卡重新开始
   * - 清空旧录制
   */
  reset() {
    this.mode = RecordMode.IDLE;
    this.currentClip = null;
    this.replayIndex = 0;
    this.recordStartTime = 0;
  }

  /**
   * 获取当前回放片段的起始位置
   * 方便外部系统生成分身 / 回放角色
   *
   * @returns {{x:number, y:number}|null}
   */
  getReplayStartPosition() {
    if (!this.currentClip) return null;
    return this.currentClip.getStartPosition();
  }

  /**
   * 获取当前正在回放到哪一帧
   * 主要用于调试和 UI 显示
   *
   * @returns {InputFrame|null}
   */
  getCurrentFrame() {
    if (!this.currentClip) return null;
    return this.currentClip.getFrame(this.replayIndex);
  }

  /**
   * 当前是否正在录制
   *
   * 这里的“当前”指的是：
   * 当前这一时刻，RecordSystem 的运行状态
   *
   * @returns {boolean}
   */
  isRecording() {
    return this.mode === RecordMode.RECORDING;
  }

  /**
   * 当前是否正在回放
   *
   * @returns {boolean}
   */
  isReplaying() {
    return this.mode === RecordMode.REPLAYING;
  }

  /**
   * 当前是否处于空闲状态
   * 这个方法不在您原始 UML 图里，但实际项目里很常用
   *
   * @returns {boolean}
   */
  isIdle() {
    return this.mode === RecordMode.IDLE;
  }

  /**
   * 当前是否存在可用录制片段
   *
   * @returns {boolean}
   */
  hasClip() {
    return this.currentClip !== null && !this.currentClip.isEmpty();
  }
}
