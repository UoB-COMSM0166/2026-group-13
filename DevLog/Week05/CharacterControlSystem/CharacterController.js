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


}

