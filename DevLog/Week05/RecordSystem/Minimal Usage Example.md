# 最小调用示例（外部系统如何使用 RecordSystem）

`RecordSystem` 模块只负责 **录制与回放逻辑**，  
而 **何时触发回放**、**如何将回放帧应用到角色**，则由外部系统负责（例如键盘输入、UI 控制或游戏流程管理）。

最简单的集成示例。

---

## 在游戏主循环中调用回放

在游戏主循环（例如 `update()` 或 `draw()`）中，每一帧检查是否正在回放，并获取当前回放帧。

```javascript
// 示例：在游戏主循环中处理 replay

function updateGame() {

    // 判断当前是否处于回放状态
    if (recordSystem.isReplaying()) {

        // 获取当前回放帧
        const frame = recordSystem.updateReplay();

        // 如果回放尚未结束，则将这一帧应用到角色控制系统
        if (frame !== null) {
            characterController.applyInputFrame(frame, controlledEntity);
        }

    }
}
```

## 通过外部输入触发回放

### 回放通常由 键盘输入、UI 按钮或游戏流程控制触发，例如：
```
function keyPressed() {

    // 按 P 键开始回放
    if (key === 'P') {
        recordSystem.startReplay();
    }

    // 按 R 键提前停止回放
    if (key === 'R') {
        recordSystem.stopReplay();
    }

}
```

## 设计原则
RecordSystem 模块只负责：
- 记录玩家逐帧输入
- 保存录制片段（RecordClip）
- 按顺序回放 InputFrame
它不会直接控制角色移动、物理或碰撞系统。这些行为由外部模块（如 CharacterController、Physics、Collision 等）负责，进而保证模块之间的低耦合（low coupling），使录制与回放系统保持独立与可复用。
