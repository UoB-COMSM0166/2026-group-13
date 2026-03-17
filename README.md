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

## Game Demo
**[Click here to play our U help U Demo1 now!](https://uob-comsm0166.github.io/2026-group-13/Demo1)**

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
***U Help U***

*U Help U* is a 2D side‑scrolling platformer puzzle game built around the concept of **self‑collaboration**. Players control the “Present Self” to record actions, and upon playback, a “Past Self” is generated. This Past Self faithfully reproduces the recorded inputs and physics‑based trajectory, acting as a **solid cooperative unit** that can interact physically with the Present Self—standing on each other, boosting each other, and enabling creative traversal strategies.

The game contains no enemies. Its core challenge lies in predicting and coordinating the interaction between past and present actions, delivering the thematic experience that **“every attempt has value—your past efforts become the foundation for your present success.”**

Each level is a standalone challenge. After completing one, players proceed to the next.

---

### Core Gameplay (How to Play)

#### 1. Basic Controls  
- **Movement**: A / D  
- **Jump**: W or Space  
- **Record / Replay**: R  

#### 2. Three Core Modes (Closed‑Loop System)

#### (1) Exploration Mode  
The player controls the Present Self to explore the terrain, observe obstacles, and plan the route that the Past Self must follow.  
- Affected by gravity  
- No Past Self exists yet  
- Focus on observation and planning  

#### (2) Recording Mode  
Activated by pressing R. A “Recording” indicator appears, and a 10‑second recording begins. The system records **input commands**, not fixed positions.  
- Present Self moves freely  
- Players create “useful collaborative trajectories”  
- Press R again or wait for the timer to end  
- Playback begins automatically  

#### (3) Collaborative Replay Mode  
A Past Self is generated and replays the recorded actions using real‑time physics.  
- Present Self remains controllable  
- Past Self follows recorded inputs under gravity  
- Both entities can stand on each other  
- Press R to interrupt and re‑record  
- Past Self disappears when playback ends  

#### 3. Physical Rules  
- Both selves are affected by gravity  
- Both can stand on floors, platforms, or each other  
- Vertical stacking allowed; horizontal overlap prevented  
- Both are solid, impenetrable units  

---

### Game Goals

#### 1. Level Objectives  
- **Primary**: Reach the designated endpoint  
- **Advanced**:  
  - Complete with the fewest recordings  
  - Achieve a perfect one‑take recording  
- **Hidden**:  
  - Collect **Time Shards** in elevated or hidden locations  

#### 2. Core Experience Goals  
- Create the feeling of “collaborating with your past self”  
- Encourage spatial reasoning and forward planning  
- Reinforce the theme that past efforts empower present breakthroughs  

---

### Core Highlights (Differentiation)

#### Immersive Past–Present Integration  
- **Action‑Based Recording**: Playback uses real‑time physics, not scripted positions  
- **Bidirectional Interaction**: Both selves can serve as platforms for each other  
- **Non‑Punitive Design**: No time limits or death penalties  
- **Visual Clarity**:  
  - Present Self: solid white  
  - Past Self: translucent blue  
  - Background: pink  
  - UI labels: “NOW” and “PAST”  

---

### Requirements 
<figure style="text-align: center;">
  <img src="./assets/Stakeholders.png" alt="Stakeholders">
  <figcaption style="font-size: 1.3em; font-weight: bold;">
    Stakeholders
  </figcaption>
</figure>

---

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 
#### Class Diagram

![Class Diagram](./assets/GameDiagram.png)

> ⚠️Work in Progress

---

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the TWO areas of *technical challenge* in developing your game. 

(Draft)

*U Help U* is developed using the p5.js library and follows an object-oriented, modular design approach. Our system architecture encapsulates core game components into distinct classes, including the main player, time-clones, a custom physics engine, and a collision detection system. To deliver the core experience of "collaborating with your past self," we had to overcome several significant technical hurdles during development. Specifically, we highlight the following two primary technical challenges:

**Technical Challenge 1: Deterministic Replay and Physics State Synchronization for Clones**

The core gameplay loop of *U Help U* relies heavily on recording player inputs and generating "ghost clones" to replay these actions for cooperative puzzle-solving. The most critical technical hurdle was achieving absolute "deterministic replay" within the JavaScript/p5.js environment. Initially, we attempted to record the absolute spatial coordinates of the player frame-by-frame. However, due to browser frame rate (FPS) fluctuations and unstable delta times, the clones experienced severe spatial drift during playback. This minor physical deviation led to critical collision failures—for example, a clone narrowly missing a trigger button, or the "Present Self" failing to stand stably on top of the clone.

To resolve this, we abandoned absolute coordinate tracking and designed a robust Input Recorder utilizing a Fixed Time Step. During the recording phase, the system precisely samples the player's input vectors (e.g., key states and durations); during playback, these inputs are re-injected into the real-time physics engine. By implementing this approach, we ensured 100% physical state synchronization and collision accuracy between the main entity and its clones across complex platforming sequences, completely eliminating spatial drift.

**Technical Challenge 2: Decoupling Complex Puzzle Logic via Event-Driven Architecture**

As level designs became more intricate, the game environment incorporated the main player, multiple clones, gravity-sensitive switches, timed doors, and various traps. Initially, managing the interactions between these entities using standard conditional statements (if/else) within the entity classes led to highly coupled, unmaintainable "spaghetti code". This architecture made it exceedingly difficult to debug state changes or introduce new interactive mechanics.

To overcome this architectural bottleneck, we undertook a major refactoring of the game's core interaction logic by implementing an Event-Driven Architecture (specifically, an Event Bus system). The technical complexity lay in designing a centralized event dispatcher that allows all game entities to communicate asynchronously. Under this new architecture, entities no longer reference each other directly. For example, when a player or clone steps on a pressure plate, the plate simply broadcasts a "stepped_on" event; any linked door or trap listening for this event will then independently trigger its respective animation and state change. This decoupled design not only eradicated hard-coded dependencies but also laid the technical groundwork for highly scalable and complex puzzle designs in future development.

---

### Evaluation

- 15% ~750 words
- One qualitative evaluation (of your choice)
- One quantitative evaluation (of your choice) 
- Description of how code was tested. 

### --- Qualitative ---

#### (1) Contextual Onboarding & Bilingual Support

Issue: Players require clearer, real-time guidance on game controls and mechanics. Static instructions are insufficient.

Action Plan: Implement bilingual (English and Chinese) proximity-based tooltips. Following the TA's recommendation, UI prompts (e.g., "Press [E] to interact" / "按 [E] 互动") will dynamically appear when the player's character approaches specific interactive elements, such as buttons or traps.

This aligns with Nielsen's "Recognition rather than recall". By providing contextual instructions exactly when and where they are needed, we significantly reduce the players' cognitive memory load.

#### (2) Learning Curve & Scaffolding (Level 0)

Issue: Transitioning directly into Level 1 introduces too many mechanics at once, causing a steep learning curve for new players.

Action Plan: Design and insert a simple "Tutorial Level" (Level 0) prior to the first official stage. This safe, low-stakes environment will allow players to practice basic movements and test the core mechanics without the threat of failing. It doesn't need to be too complex; it should mainly introduce the game's controls to new players.

This addresses "Error prevention" and enhances "User control and freedom", ensuring players are comfortable with the physics and controls before facing actual challenges.

#### (3) Narrative Context & Conceptual Mapping

Issue: The core gameplay loop (the time-clone mechanic) feels abstract without a narrative foundation.

Action Plan: Introduce a brief narrative sequence or story screen at the start of the game. This will establish the world's lore, explaining the concept of manipulating time and cooperating with one's "past self" and "present self" to solve puzzles.

This improves the "Match between system and the real world". Providing a narrative metaphor (co-op with a past self) makes the complex time-manipulation mechanic more intuitive and mentally accessible for the player.

### --- Quantitative ---

#### Evaluation Findings

We conducted a quantitative user evaluation with 10 participants, using a within-subjects design to compare the user experience between Level 1 and Level 2. Participants completed the NASA Task Load Index (TLX) and System Usability Scale (SUS) after playing each level. We then ran a Wilcoxon Signed-Rank Test (with an alpha level of 0.05) to determine if there were significant differences in perceived workload and usability.

* **System Usability Scale (SUS):** The test yielded **W = 21.0** and **p = 0.857**. Since p > 0.05, there is **no significant difference** in usability between the two levels. Both levels scored well above the industry average of 68 (Level 1 mean: 71.5; Level 2 mean: 73.25). This is a positive outcome, indicating that our core UI and control mechanics remain stable, intuitive, and easy to use regardless of the difficulty progression.

* **NASA Task Load Index (TLX):** The test yielded **W = 10.0** and **p = 0.138**. Since p > 0.05, there is **no significant difference** in perceived workload between the two levels. Although the absolute mean score increased from 37.93 (Level 1) to 46.67 (Level 2), the lack of statistical significance suggests a strong "learning effect." Players mastered the mechanics in the first level, which counteracted the static difficulty increase in the second level.

#### Reconsidered Technical Challenges

Based on the quantitative evaluation results and the core mechanics of our time-clone puzzle platformer, we have reconsidered our primary technical challenges for the ongoing development:

#### Technical Challenge 1: Algorithm-Driven Dynamic Difficulty Adjustment & State Machine Refactoring
* **Context:** Our Wilcoxon Signed-Rank Test for NASA TLX revealed that static level design fails to produce a statistically significant increase in cognitive workload due to player learning effects.
* **Challenge:** Breaking away from hard-coded difficulty scaling by implementing a Dynamic Difficulty Adjustment (DDA) algorithm. The technical hurdle involves building a background system to parse real-time player metrics (e.g., completion time, clone usage efficiency) and refactoring the Finite State Machines (FSM) of environmental hazards and enemies. The FSMs must dynamically interpret DDA parameters to alter attack wind-up frames, movement speeds, or pathfinding algorithms on the fly, ensuring a consistent and measurable escalation of cognitive load.

#### Technical Challenge 2: Deterministic Replay and Physics State Synchronization for Clones
* **Context:** The core gameplay loop relies heavily on recording player inputs and generating "ghost clones" to replay actions for cooperative puzzle-solving.
* **Challenge:** Achieving absolute "deterministic replay" within the JavaScript/p5.js environment. Frame rate (FPS) fluctuations and unstable delta times cause spatial drift if coordinates are simply recorded frame-by-frame, leading to critical physics and collision failures during replay (e.g., a clone narrowly missing a trigger button). The technical complexity lies in designing a robust Input Recorder using a Fixed Time Step to sample and replay input vectors, ensuring 100% physical state synchronization and collision accuracy between the main entity and its clones across complex platforming sequences.

#### Technical Challenge 3: Decoupling Complex Puzzle Logic via Event-Driven Architecture**
* **Context:** As levels become more intricate, managing interactions between the main player, multiple clones, various switches, timed doors, and traps using standard conditional statements (`if/else`) leads to highly coupled, unmaintainable "spaghetti code."
* **Challenge:** Refactoring the game's core interaction logic by implementing an Event-Driven Architecture (such as the Observer pattern or an Event Bus system). The technical difficulty is designing a centralized event dispatcher that allows entities to communicate asynchronously. For example, a pressure plate simply broadcasts a "stepped_on" event, and any linked door or trap listens for this event to trigger its animation and state change. This eliminates direct hard-coded dependencies and lays the technical groundwork for highly scalable and complex puzzle designs.

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
