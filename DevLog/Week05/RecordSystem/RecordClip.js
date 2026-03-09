// RecordClip.js
// --------------------------------------------------
// 表示“一次完整录制”的数据集合
// 它不仅保存逐帧控制意图数组，还保存：
// - 录制起点
// - 录制时长
// - 一些便于外部读取的工具方法
// --------------------------------------------------

class RecordClip {
  /**
   * @param {number} startX - 录制起点 X
   * @param {number} startY - 录制起点 Y
   */
  constructor(startX = 0, startY = 0) {
    /**
     * 当前录制片段包含的所有逐帧控制意图
     * 数组中的每一个元素都应是 InputFrame
     * @type {InputFrame[]}
     */
    this.frames = [];

    /**
     * 本次录制起点 X
     * 回放时分身 / 回放角色通常应从这里开始
     * @type {number}
     */
    this.startX = startX;

    /**
     * 本次录制起点 Y
     * @type {number}
     */
    this.startY = startY;

    /**
     * 本次录制持续了多少毫秒
     * @type {number}
     */
    this.durationMs = 0;
  }

  /**
   * 向当前 clip 中加入一帧控制意图
   *
   * @param {InputFrame} frame
   */
  addFrame(frame) { // 核心方法1：压入新的帧数据。
    if (!(frame instanceof InputFrame)) {
      throw new Error("RecordClip.addFrame(frame): frame 必须是 InputFrame 实例");
    }

    // 存入副本，避免外部继续修改 frame 时污染 clip 数据
    this.frames.push(frame.copy());
  }

  /**
   * 按索引取出一帧数据
   *
   * @param {number} index
   * index 是数组位置编号：
   * 0 表示第一帧
   * 1 表示第二帧
   * 2 表示第三帧
   *
   * @returns {InputFrame|null}
   */
  getFrame(index) { // 核心方法2：检索特定时间点的操作。
    if (index < 0 || index >= this.frames.length) {
      return null;
    }

    return this.frames[index];
  }

  /**
   * 判断当前 clip 是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.frames.length === 0;
  }

  /**
   * 清空当前 clip 中保存的所有帧
   * 注意：
   * 这里保留起点坐标，但清空帧数据和时长
   * 如果您想连起点也清掉，可以在 reset() 里另做处理
   */
  clear() { // 核心方法3：重置内存，准备下一次录制。
    this.frames = [];
    this.durationMs = 0;
  }

  /**
   * 返回当前 clip 中共有多少帧
   * @returns {number}
   */
  size() {
    return this.frames.length;
  }

  /**
   * 返回回放起始位置
   * 方便外部角色生成分身时直接读取
   *
   * @returns {{x:number, y:number}}
   */
  getStartPosition() {
    return {
      x: this.startX,
      y: this.startY
    };
  }
}
