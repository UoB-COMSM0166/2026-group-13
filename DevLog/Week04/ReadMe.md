# Week 04 Tasks: Requirements Analysis

<br>

## Skateholders

### **1. Players**

- **高玩** 
- **菜鸟/新手** 
- **Potential Playerr潜在玩家**
The people who care about the first impression, how easy it is to pick up, and performance.
- **职业玩家** 
- **普通玩家**

### **2. Designers设计师**
关卡策划/关卡系统设计师、ui设计、art designer美术设计师、write designer文案设计师等等

### **3. Developer(Coder) 开发者（程序员）** 
The people who focuses on the implementation and smooth execution of core functionalities, as well as maintainability, scalability, and debugging efficiency.

### **4. 测试（Tester）**

### **5. lecturer /TA讲师/助教（课程授课教师）**

### **6. 竞争对手（比如其他团队、市面游戏）**

### **7. 社区成员（比如游戏论坛成员、社交软件相关论坛用户）**

### **8. software engineering软件工程（本课程及学院）**

### **9. platform平台：p5js**

### **10. 市场相关人员（市场营销员、调查员、调研员之类的）**

<br>

## Epics and User Stories

### **Part One: Players**
1. **高玩**：
2. **菜鸟/新手**：
3. **Potential Player - Accessible Gameplay and Seamless Experience**
- **Visual Hook** - As a potential player looking for a new game, I want to see a vibrant and dynamic cover art, so that my curiosity is sparked and I am encouraged to click through. The color scheme of the cover art must remain consistent with the in-game UI to create a unified brand identity.
- **Catchy Title and Slogan** - As a potential player, I want to see a unique, memorable game title and a concise gameplay description, so that I can instantly understand what makes this game unique. Must include a "Hook Line" (under 20 words) that highlights the core challenge (e.g., "The ultimate one-life challenge").
- **Superior Game Performance** - As a potential player, I want the game to load quickly within the p5.js web environment, so that I don't lose interest due to long wait times. When running on mainstream browsers (Chrome/Edge), the frame rate (FPS) must remain stable at approximately 60 FPS.
4. **职业玩家**：
5. **Normal Player**：  
- **Technical Implementation & Stability** - As a normal player, I want the game to run smoothly without lag or unexpected crashes, so that I can focus on gameplay rather than technical issues.  
- **Game Balance & Difficulty Adjustment** - As a normal player, I want the game difficulty to increase smoothly over time (not in sudden spikes),so that the challenge feels fair and I stay motivated to continue playing.

### **Part Two: Designers设计师**

### **Part Three: Developer(Coder) - Robust Game Framework & Debugging System**
- **Code Modularity** - As a coder, I want to build a class-based modular entity system, so that I can add new enemies or power-ups without breaking the existing logic. All game objects (e.g., Player, Enemy) must be encapsulated in separate .js files and invoked by the main script.
- **Real-time Debugging Tools** - As a coder, I want a toggleable "Debug Mode" that displays hitboxes, so that I can precisely fine-tune the physical collision logic. When Debug Mode is active, the console must output the player's current coordinates (x, y) in real-time.

### **Part Four: Designers设计师**

### **Part Five: lecturer TA讲师/助教（课程授课教师）**

### **Part Six: 竞争对手**

### **Part Seven: 社区成员**

### **Part Eight: software engineering 本课程及学院**

### **Part Nine: platform平台：p5js**  
- **Technical Implementation & Stability** - As the p5.js platform, I want the game logic and rendering to be implemented efficiently within the p5.js framework, so that the game can run reliably in a web browser environment.
- **Game Balance & Difficulty Adjustment** - As the p5.js platform, I want game difficulty to be controlled through adjustable parameters (e.g., movement speed, obstacle frequency, timing limits), so that balance changes can be made without rewriting core game logic.

### **Part Ten: 市场相关人员**

<br>

## Reflection

在我们推进游戏进度时，团队将史诗、用户故事和验收标准应用于我们的“录制与回放”机制构建的横版卷轴平台闯关挑战游戏，并对于作为实用的需求工程工具而非抽象的文档练习有了更清晰的理解。

在史诗级故事层面，我们学习了如何将整体设计意图转化为指导开发决策的战略目标。它帮助我们设定了诸如易于上手的新手引导、低挫败感的游戏体验以及机制驱动的创造力等目标。这些宏观主题确保了各个功能始终与整体玩家体验保持一致，而不是孤立地实现。例如，定义“零挫折、短周期”这一史诗，确保即使在设计像“颠倒世界”这样复杂的关卡时，我们的开发重点也能始终与“最小操作 与 最大巧妙性”的核心愿景保持一致。

用户故事则将我们的关注点从机制设计转移到了体验设计。通过应用“作为玩家，我想要……，以便……”的格式，我们将诸如记录玩家操作或限制回放次数等技术概念重新定义为以玩家为中心的动机，例如清晰度、满足感和巧妙解决问题的成就感。这种方法还帮助我们区分新手玩家、经验丰富的玩家和评估人员，从而使我们能够在早期阶段优先考虑可用性和学习曲线。例如，我们没有简单地编写克隆功能，而是定义了：“作为玩家，我希望利用我的‘过去自我’作为垫脚石，以便到达更高的平台”。这明确了克隆机制的实际游戏价值。

最后，验收标准为我们提供了必要的约束与技术严谨性，使我们的想法可测试且可实现。通过使用 Given-When-Then 结构，我们定义了清晰时间循环逻辑的可测试结果。例如：“给定录制阶段结束，当回放阶段开始时，‘过去的自己’实体必须执行与录制输入完全相同的顺序。” 将抽象的谜题构想转化为客观、可测试的需求，有效地防止了范围蔓延，并确保创意在 p5.js 环境下保持技术可行性。

总而言之，这项实践表明，需求方法并非对创造力的限制，而是帮助我们将复杂的游戏创意转化为连贯、可玩且具有真正用户价值的系统框架。