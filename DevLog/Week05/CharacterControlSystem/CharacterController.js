class CharacterController {//多例模式，每个可操控角色拥有一个实例，比如主角、过去自己、敌人、ai控制）
    constructor(controlMode) {
        this.controlMode = controlMode;
        window.addEventListener();
        window.addEventListener();
    }
    switchMode(controlMode) {
        this.controlMode = controlMode;
    }

    controlPipeline(event) {
        const processedEvent = this.controlMode.eventHandler();
        const intent = this.controlMode.eventToIntent(processedEvent);
        const action = this.controlMode.intentToAction(intent);
        this.controlMode.actionToPhysics(action);
    }

    /**
    * -----------增加接口（关联录制回放模块）-------------
    * applyInputFrame(frame, controlledEntity)
    * --------------------------------------------------
    * 职责：
    * 复制把 RecordSystem 回放出来的一帧 InputFrame
    * 应用到某个受控角色（例如主角、分身、AI角色）上。
    *
    * 作用：
    * 1. 让“玩家真实输入”和“回放输入”共用同一套控制接口
    * 2. 让 RecordSystem 只负责“输出数据”，不直接负责角色移动
    * 3. 方便以后扩展 AI / 脚本控制 / 网络同步
    *
    * 参数说明：
    * @param {InputFrame} frame
    *   由 RecordSystem.updateReplay() 返回的一帧控制意图对象
    *
    * @param {Object} controlledEntity
    *   当前被控制的角色对象，例如 player / clone
    *
    * 这个角色对象建议至少具备以下字段：
    * - controlledEntity.vel.x
    * - controlledEntity.vel.y
    * - controlledEntity.speed
    * - controlledEntity.jumpForce
    * - controlledEntity.onGround
    * - controlledEntity.facingRight
    *
    * 如果角色还支持交互 / 使用道具，也建议提供：
    * - controlledEntity.tryInteract()
    * - controlledEntity.useItem()
    *
    * 这个方法只负责“把控制意图应用到角色身上”，
    * 不负责：
    * - 重力
    * - 碰撞修正
    * - 物理更新
    * 这些应交给其他系统继续处理。
    * 
    * ========================= 团队接口须知 =========================
    * 此方法是我负责的 RecordSystem 模块与角色控制系统之间的集成接口。
    * RecordSystem 会将之前录制的玩家输入重放为 InputFrame。
    * 此方法将该 InputFrame 转换为实际的角色动作，
    * 即在角色控制模块中，“把一帧输入应用到角色身上”
    * 
    * 注意事项：
    * 1. RecordSystem 不直接控制角色的物理特性或移动。
    * 2. 所有重放的输入必须通过此方法应用。
    * 3. 真实玩家输入和重放输入应使用相同的控制管线。
    * 4. 对 InputFrame 结构的任何更改都必须同时更新此接口。
    *
    * 此设计使录制系统独立于以运动，碰撞，动画等系统：
    * 
    * 添加者：录制系统模块（徐思齐）
    * ===============================================================
    */
    applyInputFrame(frame, controlledEntity) {
        // -----------------------------
        // 一、基础安全检查
        // -----------------------------
        // 如果 frame 不存在，说明当前没有可执行的回放帧，直接返回
        if (!frame) return;

        // 如果 controlledEntity 不存在，也无法应用控制
        if (!controlledEntity) return;

        // -----------------------------
        // 二、处理水平移动
        // -----------------------------
        // InputFrame.moveX 约定为：
        // -1 = 向左
        //  0 = 不进行水平移动
        //  1 = 向右
        //
        // 这里不直接写死速度值，而是乘以角色自己的 speed，
        // 这样主角、分身、敌人都可以有各自不同的移动速度。
        // 如果角色对象没有 speed 字段，则默认使用 0，避免报错。
        // -----------------------------
        const speed = controlledEntity.speed ?? 0;

        // 把这一帧的水平移动意图转换成角色的水平速度
        controlledEntity.vel.x = frame.moveX * speed;

        // -----------------------------
        // 三、处理角色朝向
        // -----------------------------
        // 这里单独使用 facingRight，而不是通过 moveX 推断，
        // 是为了保证：
        // 1. 当角色静止时，也能保持正确朝向
        // 2. 回放时视觉效果与录制时一致
        // -----------------------------
        controlledEntity.facingRight = frame.facingRight;

        // -----------------------------
        // 四、处理跳跃
        // -----------------------------
        // 只有在以下条件同时满足时，才执行跳跃：
        // 1. 当前帧要求跳跃（frame.jumpPressed === true）
        // 2. 角色当前在地面上（controlledEntity.onGround === true）
        // 为了避免：
        // - 连续帧重复触发跳跃
        // - 空中无限跳
        // -----------------------------
        if (frame.jumpPressed && controlledEntity.onGround) {
            // jumpForce 通常是一个负值，例如 -12
            // 因为在大多数 2D 坐标系中，Y 向下增大，所以向上跳要给负速度
            controlledEntity.vel.y = controlledEntity.jumpForce;

            // 一旦起跳，立刻把 onGround 改为 false
            // 这样后续帧就不会继续重复触发跳跃
            controlledEntity.onGround = false;
        }

        // -----------------------------
        // 五、处理交互动作
        // -----------------------------
        // 如果当前帧要求交互，并且角色对象实现了 tryInteract()，
        // 就调用它。
        // 这里用 typeof 检查，是为了避免：
        // 某些角色没有交互能力时直接报错。
        // -----------------------------
        if (
            frame.interactPressed &&
            typeof controlledEntity.tryInteract === "function"
        ) {
            controlledEntity.tryInteract();
        }

        // -----------------------------
        // 六、处理使用道具动作
        // -----------------------------
        // 如果当前帧要求使用道具，并且角色对象实现了 useItem()，
        // 就调用它。
        // 例如分身在回放时触发炸弹、机关、特殊道具等。
        // -----------------------------
        if (
            frame.useItemPressed &&
            typeof controlledEntity.useItem === "function"
        ) {
            controlledEntity.useItem();
        }
    }

}

