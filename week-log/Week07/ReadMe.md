# Week 07 Tasks: Difficulty Levels, User Evaluation, and Demo Upgrade

<br>

In Week 07, our team completed the **second sprint** and upgraded the first playable demo of *U help U*. Based on the teacher’s requirements, this week focused on three main tasks: adding two difficulty levels, writing up the findings from user evaluations, and planning a more in-depth qualitative evaluation with other students in the unit.

Compared with Week 06, where we mainly built the first playable MVP, Week 07 focused more on **player experience**, **difficulty adjustment**, and **usability improvement**. We used feedback from qualitative evaluation to identify problems in onboarding, control guidance, learning curve, and interface clarity, then converted these findings into concrete action plans for the next version of the demo.

<br>

## Weekly Objectives

- Add **two difficulty levels** to the game.
- Make sure players can select between different difficulty levels.
- Write up the findings from user evaluations and add them to the GitHub repository.
- Plan a more in-depth qualitative evaluation with people outside the team.
- Complete the second sprint and upgrade the first demo.
- Improve the demo based on player feedback and usability observations.

<br>

## Sprint 2 Overview

During the second sprint, we upgraded the demo from a basic playable prototype into a clearer and more player-oriented version. The main design direction was to make the game easier to understand for first-time players while still leaving space for more difficult challenges.

The sprint focused on:

- Difficulty selection
- Better onboarding
- Clearer instructions
- Bilingual guidance
- Improved level progression
- More explicit UI feedback
- Preparing the game for broader user testing

<br>

## Difficulty Level Design

One of the teacher’s Week 07 requirements was to add **two difficulty levels** and allow players to choose between them. In response, we planned the game around two modes:

| Difficulty | Target Player | Design Intention |
|---|---|---|
| Easy Mode | New players / normal players | Provide a more forgiving experience with simpler timing, clearer guidance, and lower failure pressure |
| Hard Mode | Experienced / challenge-seeking players | Increase challenge through tighter timing, harder platforming, and more demanding clone cooperation |

<br>

### Easy Mode

Easy Mode is designed for players who are new to the game or unfamiliar with the record-and-replay mechanic. The goal is to reduce early frustration and help players understand the controls before facing complex puzzles.

Possible Easy Mode adjustments include:

- Slower pacing
- More forgiving platform gaps
- More visible prompts
- Simpler button and portal puzzles
- Lower punishment for mistakes
- More time to complete recording and replay actions

<br>

### Hard Mode

Hard Mode is designed for players who already understand the core mechanic and want a more challenging version of the game. It can increase difficulty without changing the basic rules of the game.

Possible Hard Mode adjustments include:

- Faster movement or tighter timing requirements
- More precise platforming
- More dangerous obstacle placement
- More complex button combinations
- Less explicit guidance
- Shorter available time for planning or recording

<br>

This two-mode structure helps the game support different player groups while keeping the same core mechanic.

<br>

## Qualitative Evaluation Findings

During the user evaluation, we focused on how players understood the game, how easily they learned the mechanics, and what caused confusion or frustration. The evaluation highlighted several important issues.

<br>

### 1. Contextual Onboarding and Bilingual Support

**Issue:**  
Players need clearer real-time guidance on controls and mechanics. Static instructions are not enough, especially when players encounter interactive objects for the first time.

**Action Plan:**  
Implement bilingual proximity-based tooltips in English and Chinese. For example, when the player approaches an interactive object, the game can dynamically show prompts such as:

```text
Press [E] to interact / 按 [E] 互动
Press [R] to record / 按 [R] 录制
Press [C] to retry / 按 [C] 重试
```

This follows the usability principle of **recognition rather than recall**. Instead of requiring players to remember all controls from the beginning, the game should provide contextual instructions exactly when they are needed.

<br>

### 2. Learning Curve and Scaffolding

**Issue:**  
Starting directly from Level 1 introduces too many mechanics at once. New players may need to understand movement, jumping, recording, replaying, buttons, traps, and portals within a short time, which creates a steep learning curve.

**Action Plan:**  
Add a simple **Tutorial Level / Level 0** before the first official stage. This level should be safe and low-stakes, allowing players to practise:

- Basic movement
- Jumping
- Using the record key
- Creating a clone
- Pressing a button
- Opening a portal

The tutorial does not need to be complex. Its main purpose is to introduce the game’s controls and core mechanic gradually.

<br>

### 3. Recording Feedback and Player Confidence

**Issue:**  
Players may not always know whether recording has started, how much time remains, or what the clone will do after replay begins.

**Action Plan:**  
Improve recording feedback through visual UI indicators, clearer text prompts, and possible countdown feedback. This should make the recording state easier to understand and reduce uncertainty during gameplay.

<br>

### 4. Difficulty Balance

**Issue:**  
The same level may feel too simple for experienced players but too difficult for first-time players.

**Action Plan:**  
Use the two difficulty levels to separate the learning experience from the challenge experience. Easy Mode should support learning and experimentation, while Hard Mode should provide a more skill-based puzzle challenge.

<br>

## Demo Upgrade in Sprint 2

Based on the evaluation findings, the second sprint upgraded the demo in the following directions:

| Area | Sprint 2 Improvement |
|---|---|
| Difficulty | Planned and introduced two difficulty modes |
| Onboarding | Proposed Tutorial Level / Level 0 before the first official level |
| UI Guidance | Added direction for bilingual contextual tooltips |
| Player Support | Improved focus on real-time guidance and reduced memory load |
| Evaluation | Summarised qualitative findings and converted them into action plans |
| Demo Direction | Shifted from “working prototype” to “testable player experience” |

<br>

## Updated MVP Direction

After Week 07, our MVP target became clearer. The game should not only be playable, but also understandable for first-time users. Therefore, our updated MVP priorities are:

| Priority | Feature | Reason |
|---|---|---|
| High | Basic movement and jumping | Foundation of the platformer experience |
| High | Record and replay mechanic | Core unique mechanic of the game |
| High | Easy / Hard difficulty selection | Required for player choice and difficulty tuning |
| High | Tutorial Level | Reduces early confusion and supports onboarding |
| High | Contextual bilingual prompts | Helps players understand controls at the right moment |
| Medium | More polished UI feedback | Improves clarity and player confidence |
| Medium | More level variation | Supports replayability and challenge |
| Medium | Qualitative testing with external players | Provides more reliable feedback |
| Low | Advanced visual polish | Important later, but not the immediate sprint focus |

<br>

## Evaluation Plan for Next Stage

To meet the requirement for a more in-depth qualitative evaluation, we plan to test the upgraded demo with other people in the unit. The evaluation will focus on whether players can understand the controls, complete the tutorial, use the clone mechanic correctly, and choose an appropriate difficulty level.

<br>

### Planned Evaluation Questions

- Can players understand the basic controls without verbal explanation?
- Do players notice and understand the bilingual tooltips?
- Does Tutorial Level / Level 0 help players learn the clone mechanic?
- Is Easy Mode suitable for beginners?
- Is Hard Mode meaningfully more challenging?
- Do players understand how buttons and portals work?
- At which point do players feel confused, frustrated, or confident?
- What improvements do players suggest after playing the demo?

<br>

### Planned Evaluation Method

We plan to use a small-scale qualitative evaluation method:

1. Ask participants to play the upgraded demo.
2. Observe where they hesitate, fail, or ask questions.
3. Record their comments about controls, difficulty, UI prompts, and level design.
4. Ask short follow-up questions after the play session.
5. Summarise common issues and convert them into development tasks for the next sprint.

<br>

## Weekly Outcome

By the end of Week 07, our team completed the second sprint and produced a clearer development direction for the upgraded demo. We moved beyond simply making the game run and started focusing on whether real players can understand, learn, and enjoy the game.

The most important outcome of this week is that user evaluation directly influenced our design priorities. The need for bilingual contextual prompts, a tutorial level, and two difficulty modes showed that player experience should guide our implementation decisions. This also helped us connect software engineering practice with actual game development: requirements, user stories, sprint planning, and evaluation all became part of the same iterative design process.

<br>

## Next Steps

In the next sprint, we will focus on implementing and testing the improvements identified this week:

- Finalise Easy Mode and Hard Mode parameters.
- Add difficulty selection to the UI.
- Implement Tutorial Level / Level 0.
- Add bilingual contextual tooltips.
- Improve recording and replay status feedback.
- Conduct qualitative evaluation with other students in the unit.
- Convert evaluation findings into concrete GitHub issues or Kanban tasks.
- Continue polishing the demo based on testing results.
