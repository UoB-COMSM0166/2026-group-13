# 2026-group-13
2026 COMSM0166 group 13

## Info

You will be developing your game using [P5.js](https://p5js.org) a javascript library that provides you will all the tools you need to make your game. However, we won't be teaching you javascript, this is a chance for you and your team to learn a (friendly) new language and framework quickly, something you will almost certainly have to do with your summer project and in future. There is a lot of documentation online, you can start with:

- [P5.js tutorials](https://p5js.org/tutorials/) 
- [Coding Train P5.js](https://thecodingtrain.com/tracks/code-programming-with-p5-js) course - go here for enthusiastic video tutorials from Dan Shiffman (recommended!)

## U Help U

Take control of both 'Your Past Self' and 'Your Present Self' — bring the two versions of you together in one timeline to collaborate and conquer the challenges!

IMAGE. Add an image of your game here, keep this updated with a snapshot of your latest development.

LINK. Add a link here to your deployed game, you can also make the image above link to your game if you wish. Your game lives in the [/docs](/docs) folder, and is published using Github pages. 

VIDEO. Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

## Your Group

![GROUP PHOTO](https://raw.githubusercontent.com/moosry/2026-group-13/refs/heads/main/docs/DevLog/Week01/img/Group_Picture01.jpg)

- Group member 1, Zhiqing Zhang, ek25873@bristol.ac.uk, role
- Group member 2, Siqi Xu, lv25773@bristol.ac.uk, role
- Group member 3, Xuelin Ma, pw25500@bristol.ac.uk, role
- Group member 4, Yiyuan Yao, jg25755@bristol.ac.uk, role
- Group member 5, Jingran Zhang, sx25997@bristol.ac.uk, role
- Group member 6, Wenlei Miao, hz25681@bristol.ac.uk, role

## Project Report

### Introduction

 ***U help U***

《U Help U》是一款 2D 横板跳跃类 “自我协作” 解谜游戏，核心创意是：玩家操控 “现在的自己” 录制行动，回放时生成 “过去的自己”—— 这个 “过去的自己” 会完整复现录制时的操作与物理轨迹，作为 “实心协作单位” 与 “现在的自己” 双向互踩、互相辅助，通过 “过去的自己助力现在的自己” 突破地形障碍，最终达成关卡目标。游戏没有敌人，核心挑战在于 “预判过去与现在的行动配合”，传递 “每一次尝试都有价值，过去的经历会成为现在的底气” 的核心体验。

"U Help U" is a 2D side-scrolling platformer puzzle game centered around the core concept of "self-collaboration". Players control "Your Present Self" to record actions, and upon playback, "Your Past Self" is generated — this past incarnation fully reproduces the recorded operations and physical trajectories. Acting as a solid collaborative unit, it interacts with "Your Present Self" through mutual standing (both can stand firmly on top of each other without slipping or phasing through) and mutual assistance. By leveraging "Your Past Self to empower Your Present Self," players overcome terrain obstacles to ultimately achieve the level objectives.

Players progress through the game one level at a time, with each level functioning as an independent challenge. After completing a stage, they simply move on to the next one.

 ***核心玩法（How to Play）​***
1. 基础操作（全状态通用）​

移动：A/D 键 或 方向键←→（仅左右横板移动）​

跳跃：空格键（无任何限制，随时可跳，支持空中连跳）​

录制 / 回放：R 键（一键开启录制、结束录制并触发回放）​

2. 三大核心模式（流程闭环）​

（1）探索模式（初始状态）​

玩家操控「现在的自己」（白色实心方块，带 “NOW” 标识），可自由探索关卡地形（地板、悬浮平台），观察障碍布局，规划 “过去的自己” 需要配合的行动路线。​

核心规则：「现在的自己」受重力影响，可站在地板、平台上，无其他限制；此时无 “过去的自己”，仅专注于场景探查与策略规划。​

（2）录制模式（按 R 键开启）​

开启后，屏幕顶部显示 “录制中” 提示，「现在的自己」的行动（左右移动、跳跃）会被逐帧记录 —— 记录的是 “操作指令” 而非固定位置，确保回放时能适配物理规则。​

核心规则：录制过程中，「现在的自己」仍可自由行动，需自主规划 “有价值的协作轨迹”（比如停在关键高台、移动到特定辅助位置、完成一段连续跳跃等）；录制期间不会生成 “过去的自己”，仅记录行动数据。​

再次按 R 键结束录制，自动切换到 “协作回放模式”，同时生成「过去的自己」（蓝色半透方块，带 “PAST” 标识）。​

（3）协作回放模式（录制结束后自动进入）​

「现在的自己」保持可操控状态，「过去的自己」按录制的操作指令实时演算物理轨迹（完全复现录制时的行动，受重力、地形影响，不是固定脚本）。​

核心规则：​

「现在的自己」与「过去的自己」均为 “实心箱子” 物理属性，可双向互踩（现在能踩在过去的自己身上，过去的自己也能踩在现在的自己身上，站稳不滑、不穿透）。​

两者水平方向不可重叠（碰撞后自动水平推离），垂直方向可站立叠加，互不干扰行动逻辑。​

回放过程中，玩家操控「现在的自己」利用「过去的自己」的轨迹突破障碍（比如踩在 “过去的自己” 肩上跳上更高平台、让 “过去的自己” 停在悬空位置作为临时跳板等）。​

若需调整 “过去的自己” 的行动，可再次按 R 键中断回放，回到 “探索模式” 重新录制（新录制的内容会覆盖旧的 “过去的自己”，同一时间仅存在一个 “过去的自己”）。​

回放结束后（录制的操作帧全部执行完毕），「过去的自己」自动消失，回到 “探索模式”，可重新录制新的 “过去的自己”。​

3. 物理规则（核心共识）​

「现在的自己」与「过去的自己」均受重力影响，自然下落，遵循相同的物理逻辑。​

两者均可站在地板、悬浮平台、对方顶部（垂直贴紧，速度清零，稳定站立），均为不可穿透的实心单位。​

 ***游戏目标（Game Goal）​​***
1. 关卡目标​

基础目标：

操控「现在的自己」到达关卡指定终点（比如绿色旗帜、发光传送门等可视化标记）。​

进阶目标：​

最短录制次数通关（越少次录制 “过去的自己” 越优，考验规划能力）；​

无多余操作录制（录制的行动完全服务于协作，无无效移动，追求 “一次成型”）；​

隐藏目标：收集关卡内的 “时光碎片”（分散在高台、隐蔽位置，需 “过去的自己” 与 “现在的自己” 配合才能拿到）。​

2. 核心体验目标​

让玩家直观感受 “与过去的自己协作” 的奇妙感，体会 “自我突破” 的成就感；​

培养空间预判能力和逻辑规划能力（需提前设想 “过去的行动” 如何为 “现在的突破” 铺路）；​

传递 “每一次尝试都不是徒劳，过去的自己会成为现在的助力” 的隐喻，强化自我成长的主题。​

四、核心亮点（差异化特色）​

“过去与现在” 的强代入感

操作录制而非位置录制：“过去的自己” 的轨迹是实时演算的，受物理规则影响（比如录制时跳上平台，回放时 “现在的自己” 可踩在 “过去的自己” 肩上再跳更高），避免固定脚本的僵硬感，增加协作灵活性。​

双向互踩的实心物理：“过去” 与 “现在” 互为协作平台，突破传统 “辅助单位单向助力” 的设定，形成 “我踩你、你踩我” 的双向协作，玩法更具创意与策略空间。​

无压力探索氛围：无时间限制、无死亡惩罚，玩家可反复录制、调整 “过去的自己” 的行动，专注于 “规划协作” 的乐趣，降低解谜焦虑。​

极简视觉与清晰反馈：粉色背景 + 高对比度角色（白色 “现在”、蓝色半透 “过去”），搭配 “NOW/PAST” 标识，让玩家快速区分两个 “自己”，降低识别成本，专注于协作逻辑。​


### Requirements 

- 15% ~750 words
- Early stages design. Ideation process. How did you decide as a team what to develop? Use case diagrams, user stories. 

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the TWO areas of *technical challenge* in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (of your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools and methods did you use? Did you define team roles? Reflection on how you worked together. Be honest, we want to hear about what didn't work as well as what did work, and importantly how your team adapted throughout the project.

### Conclusion

- 10% ~500 words

- Reflect on the project as a whole. Lessons learnt. Reflect on challenges. Future work, describe both immediate next steps for your current game and also what you would potentially do if you had chance to develop a sequel.

### Contribution Statement

- Provide a table of everyone's contribution, which *may* be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Please let us know as soon as possible if there are any issues with teamwork as soon as they are apparent and we will do our best to help your team work harmoniously together.

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5% of report grade) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.
- **Documentation** of code (5% of report grade)
  - Organise your code so that it could easily be picked up by another team in the future and developed further.
  - Is your repo clearly organised? Is code well commented throughout?
