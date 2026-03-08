// InputFrame.js
// --------------------------------------------------
// 表示“某一帧时刻，角色应执行的控制意图与动作”
// 注意：它记录的是逐帧控制意图，不是浏览器原始键盘事件。
// 这意味着它既可以来自玩家键盘，也可以来自 AI、脚本、回放系统。
// --------------------------------------------------

class InputFrame {
  /**
   * 创建一个新的逐帧控制意图对象
   *
   * @param {number} moveX
   * 水平移动意图：
   * -1 表示向左移动
   *  0 表示不进行水平移动
   *  1 表示向右移动
   *
   * @param {boolean} jumpPressed
   * 这一帧是否触发跳跃动作
   *
   * @param {boolean} facingRight
   * 这一帧角色是否应保持朝向右边
   * 这个字段很重要，因为当 moveX = 0 时，角色仍然可能需要保持上一次朝向
   *
   * @param {boolean} interactPressed
   * 这一帧是否触发交互动作（例如按钮、机关、开箱等）
   *
   * @param {boolean} useItemPressed
   * 这一帧是否触发使用道具动作（例如放炸弹、使用特殊物品）
   */
  constructor(
    moveX = 0,
    jumpPressed = false,
    facingRight = true,
    interactPressed = false,
    useItemPressed = false
  ) {
    /**
     * 水平移动意图
     * 推荐只使用 -1 / 0 / 1
     * 这样最容易和角色控制器对接
     * @type {number}
     */
    this.moveX = moveX;

    /**
     * 是否在这一帧按下跳跃
     * @type {boolean}
     */
    this.jumpPressed = jumpPressed;

    /**
     * 是否朝向右边
     * true  = 朝右
     * false = 朝左
     * @type {boolean}
     */
    this.facingRight = facingRight;

    /**
     * 是否在这一帧触发交互
     * @type {boolean}
     */
    this.interactPressed = interactPressed;

    /**
     * 是否在这一帧触发使用道具
     * @type {boolean}
     */
    this.useItemPressed = useItemPressed;
  }

  /**
   * 复制当前帧对象，避免共享同一引用
   * 这样做的好处是：
   * 1. 录制进去的数据不会被外部后续修改污染
   * 2. 回放时拿到的是一个独立快照
   *
   * @returns {InputFrame}
   */
  copy() {
    return new InputFrame(
      this.moveX,
      this.jumpPressed,
      this.facingRight,
      this.interactPressed,
      this.useItemPressed
    );
  }

  /**
   * 工具方法：从一个普通对象构造 InputFrame
   * 方便未来和其他模块对接，例如：
   * - CharacterController 输出 action 对象
   * - UI 或脚本系统生成控制意图对象
   *
   * @param {Object} obj
   * @returns {InputFrame}
   */
  static fromObject(obj = {}) {
    return new InputFrame(
      obj.moveX ?? 0,
      obj.jumpPressed ?? false,
      obj.facingRight ?? true,
      obj.interactPressed ?? false,
      obj.useItemPressed ?? false
    );
  }

  /**
   * 工具方法：把当前帧导出为普通对象
   * 方便调试、序列化、打印日志
   *
   * @returns {Object}
   */
  toObject() {
    return {
      moveX: this.moveX,
      jumpPressed: this.jumpPressed,
      facingRight: this.facingRight,
      interactPressed: this.interactPressed,
      useItemPressed: this.useItemPressed
    };
  }
}
