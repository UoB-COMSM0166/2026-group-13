// 全局状态管理器

/*
游戏状态 & 全局数据（state.js）
职责：只放全局变量和状态机，不涉及任何画面渲染和逻辑处理
  1. game State 控制游戏大状态（菜单、游戏中、暂停、胜利等）
  2. level State 控制关卡小状态（第一关、第二关）
  3. 录制系统的变量控制录制/回放流程
*/

// --- 游戏流程状态控制 ---

// 游戏全局状态机：控制当前处于哪个大界面
// 取值范围通常为: "MENU"(菜单), "LEVEL"(关卡选择), 
// "PLAYING"(游戏中), "SETTING"(设置)
let gameState = "MENU";

// 关卡内部状态机：控制当前关卡的逻辑进程
// 'IDLE'(闲置/初始), 'RECORDING'(录制中), 'REPLAYING'(回放中), 
// 'WIN'(胜利), 'DEAD'(死亡)
let levelState = 'IDLE';

// 当前玩家所处的关卡索引（1 代表第一关）
let currentLevel = 1; 

// 音频系统变量：
// 当前游戏音量（0 - 100 之间），用于控制全局声音大小初始音量设定为 50%
let gameVolume = 50; 

// 缓存变量：
// 当玩家点击静音时，用它来保存静音前的音量，以便恢复；
// 记住静音前真实的音量大小
let savedVolume = 50; 

// 物理系统参数：
// 重力加速度：每一帧都会累加到角色的垂直速度（vel.y）上，数值越大掉落越快
let gravity = 0.6;

// --- 核心逻辑：录制与回放系统 ---

// 数据仓库：一个数组，用来按帧顺序存储分身的所有操作（坐标、动作等）
let recordingData = [];

// 时间戳：记录按下“开始录制”那一刻的系统时间（单位通常是毫秒）
let recordStartTime = 0;

// 指针/计数器：在回放模式下，记录当前播放到 recordingData 数组的第几帧
let replayIndex = 0;

// 录制时限：规定玩家最长可以录制多久（这里是 10000 毫秒，即 10 秒）
let recordDuration = 10000;

// 坐标锚点：记录分身开始录制时的初始 X 位置，回放时需从这里开始
let recordStartPosX = 0; 

// 坐标锚点：记录分身开始录制时的初始 Y 位置
let recordStartPosY = 0; 

/**
 * 切换背景音乐的辅助函数
 * @param {p5.SoundFile} newBGM 要播放的新音乐
 */
function changeBGM(newBGM) {
  // 如果当前想播的音乐已经在播了，什么都不做
  if (currentBGM === newBGM && currentBGM.isPlaying()) {
    return; 
  }

  // 如果有其他音乐正在播，先把它停掉
  if (currentBGM && currentBGM.isPlaying()) {
    currentBGM.stop();
  }

  // 更新当前音乐并循环播放
  currentBGM = newBGM;
  currentBGM.loop(); // loop() 会让音乐播完后自动重头开始
}
