/*
主控/整合者/总导演的文件

这个模块“不写细节逻辑”，只做三件事：
setup()；draw()；调用其他模块的函数

职责：
调度所有的模块运转，
处理全局按键输入，
以及游戏核心的录像/回放逻辑流转
*/

/*
作为总枢纽：游戏逻辑调度与键盘响应
这个文件现在不仅是 draw() 的入口，
还接管了原本混在地图和物理文件里的
“游戏循环（Game Loop）”
以及
“输入调度（Key Pressed）”。
*/

// 加载背景图片，在文件最顶部声明全局变量
let bgImage;

// 加载背景音乐素材
let menuBGM;
let level1BGM;
let currentBGM; // 用来记录当前正在播放的音乐，方便切换

// preload 函数，用来加载素材
function preload() {
  
  // 加载 assets 文件夹下的图片
  // 注意：文件名必须与左侧列表完全一致（区分大小写）
  bgImage = loadImage('assets/Background2.png'); 
  
  // 加载音乐文件 (确保你的 index.html 里已经引入了 p5.sound 库)
  menuBGM = loadSound('assets/menu.mp3');
  level1BGM = loadSound('assets/level1.mp3');
  
}

// 初始化，不可变动
function setup() {
  createCanvas(800, 520); // 画面大小
  textAlign(CENTER, CENTER); // 让文字设置在画布的正中心
  noSmooth(); // 保持像素画风 

  initUI();          // ← 链接 ui.js 文档
  loadLevel(currentLevel); // ← level-terrain.js
  
  // 游戏一启动就应用初始的 50% 音量
  outputVolume(gameVolume / 100);
}

// 主循环，不可变动
function draw() {
  if (gameState !== "PLAYING") {
    background(248); // 画面的背景颜色
    rectMode(CENTER);
  } else {
    rectMode(CORNER);
  }

  switch (gameState) {
    case "MENU": drawMenu(); break;
    case "LEVEL": drawLevel(); break;
    case "PLAYING": drawPlaying(); break;
    case "SETTING": drawSetting(); break;
  }

  if (gameState !== "PLAYING") drawSoundIcon();
}

  // === 键盘指令枢纽 ===
function keyPressed() {
  // 仅在游玩状态下响应
  if (gameState !== "PLAYING") return;

  // 结算界面逻辑
  if (levelState === 'WIN' || levelState === 'DEAD') {
    if (key === 'c' || key === 'C') loadLevel(currentLevel);
    return;
  }

  // 录制逻辑 (修改点：支持中断)
  if (key === 'r' || key === 'R') {
    if (levelState === 'IDLE') {
      startRecording();
    } else if (levelState === 'RECORDING') {
      startReplay(); // 提前中断录制，直接开始回放
    }
  }

  // 跳跃逻辑
  if (key === ' ' || key === 'w' || key === 'W') 
  {
    if (player.onGround) 
    {
      player.jump();
    }
  }
}
