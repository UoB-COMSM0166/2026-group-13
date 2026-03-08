// RecordMode.js
// --------------------------------------------------
// 录制系统的枚举状态
// 只定义“录制模块自身”的运行状态，不和别的模块共用
// --------------------------------------------------

/**
 * RecordMode 表示 RecordSystem 当前所处的模式
 *
 * IDLE       : 空闲状态，既没有录制，也没有回放
 * RECORDING  : 正在录制玩家（或控制源）的逐帧控制意图
 * REPLAYING  : 正在按顺序回放已经录好的控制片段
 * 
 * | 状态 | 含义 | 备注 |
| :--- | :--- | :--- |
| `IDLE` | 闲置状态 | 默认状态，不进行任何数据处理。 |
| `RECORDING` | 录制中 | 系统正在实时捕获玩家的 `InputFrame`。 |
| `REPLAYING` | 回放中 | 系统正从 `RecordClip` 中提取数据驱动分身。 |
 */
const RecordMode = Object.freeze({
  IDLE: "IDLE",
  RECORDING: "RECORDING",
  REPLAYING: "REPLAYING"
});