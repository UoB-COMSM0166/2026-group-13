# Week 09 Tasks: Sprint 3, Demo 1 / Demo 2 Development, and Initial Testing

<br>

In Week 09, our team completed **Sprint 3** and made significant progress on the development of **Demo 1** and **Demo 2**. Compared with the earlier MVP demo, this sprint focused on iterative improvement, feature refinement, interface upgrades, bug fixing, and preparing two clearer demo versions for testing and presentation.

In addition to demo development, we also began preparing a more systematic testing strategy. Based on the current game mechanics, we drafted initial **manual black-box test cases** to verify the stability and logical correctness of the record-and-replay system, collision behaviour, and level objective logic.

The main outcome of this week is that the game is no longer just a basic playable prototype. It now contains a more complete gameplay structure, improved recording and replay support, better UI feedback, early tutorial content, a clearer separation between different demo versions, and an initial testing direction.

<br>

## Weekly Objectives

- Complete Sprint 3.
- Continue upgrading the playable demo based on previous evaluation results.
- Produce initial versions of **Demo 1** and **Demo 2**.
- Improve the recording and replay experience.
- Add tutorial and guidance features.
- Refine UI layout, pause functions, hint functions, and language support.
- Fix key gameplay bugs related to collision and recording.
- Prepare the game for further evaluation and presentation.
- Draft initial manual black-box test cases for core gameplay systems.

<br>

## Sprint 3 Overview

Sprint 3 focused on turning the previous prototype into a more structured and testable game demo. During this sprint, we created multiple versioned iterations from **V1** to **V17**, each addressing a specific gameplay, UI, system, or bug-fixing requirement.

The development process followed an incremental approach: instead of attempting to rebuild the whole game at once, we added and tested features step by step. This helped us keep the demo playable while gradually expanding the game systems.

<br>

## Version Progress Summary

| Version | Main Update |
|---|---|
| V1 | Combined dual-switch mechanisms and minimum puzzle structure |
| V2 | Improved clone movement and recording-related behaviour |
| V3 | Added texture fixes for the background and visual elements |
| V4 | Enhanced UI and modified platform collision behaviour |
| V5 | Added death effect |
| V6 | Added floating window / contextual prompt support |
| V7 | Added i18n language system |
| V8 | Added R key support to end playback early and improve replay control |
| V9 | Added pause function |
| V10 | Added pause settings and hint functionality |
| V11 | Added standby animations, particle effects, and camera / visual improvements |
| V12 | Modified the recording UI |
| V13 | Changed the layout to a sidebar structure |
| V15 | Fixed collision and recording bugs, refining gameplay stability |
| V16 | Added Level 1 tutorial |
| V17 | Added test level skeleton |

<br>

## Demo 1 and Demo 2

During this week, we initially completed the production of **Demo 1** and **Demo 2**. These two demos are used to present and test different stages of the game’s development. These two demos can still be played in our final game version.

<br>

### Demo 1

Demo 1 focuses on the core gameplay loop and the basic record-and-replay puzzle structure. Its purpose is to show that the main mechanic of *U help U* is playable and understandable.

Demo 1 includes:

- Basic player movement.
- Platform jumping.
- Recording and replaying actions.
- Clone cooperation.
- Dual-switch puzzle logic.
- Portal / goal completion logic.
- Basic death and retry flow.
- Improved collision and recording stability.

<br>

### Demo 2

Demo 2 builds on Demo 1 and focuses more on user experience, guidance, UI, and polish. It reflects the improvements made after previous evaluation findings.

Demo 2 includes:

- Improved recording UI.
- Pause menu and pause settings.
- Hint functionality.
- Floating prompt windows.
- Bilingual / i18n language support.
- Tutorial level content.
- Sidebar-style layout.
- Better visual feedback, standby animation, and particle effects.
- Refined replay control, including ending playback early.

<br>

## Major Improvements in Sprint 3

### 1. Recording and Replay Refinement

The recording system was one of the main focuses of Sprint 3. We refined the recording UI and improved replay control so that players can better understand and manage the clone mechanic.

Important improvements include:

- Clearer recording status display.
- More responsive replay behaviour.
- Support for ending playback early.
- Bug fixes related to recording and collision.
- Better integration between clone movement and level mechanics.

These changes directly address earlier feedback that players needed clearer recording feedback and more confidence when using the clone system.

<br>

### 2. UI and Interaction Upgrade

The user interface was improved across several versions. We added or refined:

- Pause function.
- Pause settings.
- Hint function.
- Sidebar layout.
- Floating prompt window.
- Recording UI.
- Clearer interactive guidance.

These changes make the demo easier to understand and more suitable for evaluation with new players.

<br>

### 3. Bilingual and i18n Support

Based on previous qualitative evaluation findings, we began adding an i18n language system. This allows the game to support both English and Chinese text more systematically.

This is important because our earlier evaluation showed that players benefit from contextual and bilingual onboarding. Adding i18n support also prepares the project for future localisation and clearer in-game instructions.

<br>

### 4. Tutorial Content

A Level 1 tutorial was added during Sprint 3. This connects directly to the Week 07 finding that players should not be thrown directly into a complex level without enough scaffolding.

The tutorial is intended to help players learn:

- Basic movement.
- Jumping.
- Recording.
- Replay.
- Clone cooperation.
- Interaction with puzzle elements.

<br>

### 5. Visual and Feedback Polish

Sprint 3 also included visual and feedback improvements, such as:

- Background texture fixes.
- Death effects.
- Standby animations.
- Particle effects.
- Camera and visual improvements.

These additions make the game feel more responsive and help players understand what is happening during gameplay.

<br>

### 6. Bug Fixing and Stability

As Demo 1 and Demo 2 became more complex, bug fixing became increasingly important. In particular, we refined collision and recording behaviour to reduce unexpected gameplay problems.

This sprint showed that technical stability is essential before adding more advanced systems such as leaderboard or map editor features.

<br>

# Initial Testing Work

Alongside the development of Demo 1 and Demo 2, we also began drafting a testing plan for the core game systems. Since the game relies heavily on player interaction, physical collision, recording, and replay, we first focused on **manual black-box testing**. For a detailed analysis of the test, please click <a href="./test/blackbox test.md"> here</a>

The goal of this testing draft is to verify whether the game behaves correctly from the player’s perspective, without checking the underlying source code.

<br>

## Testing Methodology

The initial testing plan mainly uses two standard software testing methods:

| Method | Purpose in Our Game |
|---|---|
| Equivalence Partitioning | Divide player actions into valid and invalid categories, such as normal recording, interrupted recording, collision with platforms, and reaching the portal |
| Boundary Value Analysis | Test system limits, such as the 10-second recording duration, edge cases in collision, and high-frequency key input |

This testing direction helps us check whether the main gameplay logic remains stable under both normal and boundary conditions.

<br>

## Black-Box Test Area 1: Recording Duration and State Switching

The record-and-replay system is the core mechanic of *U help U*, so it became the first testing focus. The current test cases check whether the player can start recording, end recording, trigger automatic replay after the 10-second limit, interrupt replay, and rapidly switch states without breaking the system.

| Test Case | Scenario | Expected Behaviour | Status |
|---|---|---|---|
| TC-1.1 | Standard recording and replay | The past self accurately reproduces the recorded movement and disappears after replay ends | Pass |
| TC-1.2 | Maximum recording duration | Recording automatically ends at the 10-second threshold and switches to replay mode | Pass |
| TC-1.3 | Replay interruption | Pressing R during replay interrupts replay and resets the system to explore mode | Pass |
| TC-1.4 | High-frequency R key input | The system prevents overlapping clones and avoids freezing or severe frame drops | Pass |

<br>

## Black-Box Test Area 2: Physical Interaction and Collision

Because the game’s main selling point is cooperation between the present self and the past self, collision behaviour is especially important. The test cases check whether two characters can stand on each other, collide horizontally, and interact correctly in mid-air.

| Test Case | Scenario | Expected Behaviour | Status |
|---|---|---|---|
| TC-2.1 | Present self stands on past self | Present self remains stable on top of past self without clipping or sliding | Pass |
| TC-2.2 | Past self lands on present self | Past self lands correctly and no clipping occurs | Pass |
| TC-2.3 | Horizontal collision | The two characters repel each other and cannot overlap horizontally | Pass |
| TC-2.4 | Mid-air dynamic collision | Collision remains physically reasonable while both characters are airborne | Pass |

<br>

## Black-Box Test Area 3: Dynamic Environment and Level Objectives

The third test area focuses on whether gameplay objectives and environmental logic work correctly. This includes support loss, collectible or interactive entity logic, and level completion.

| Test Case | Scenario | Expected Behaviour | Status |
|---|---|---|---|
| TC-3.1 | Dynamic terrain support is removed | The past self should follow real-time physics and fall naturally instead of stepping on empty space | Pass |
| TC-3.2 | Collectible entity judgement | Entity interaction should remain logically consistent between present self and past self | Pass |
| TC-3.3 | Level endpoint trigger | Present self reaching the portal should trigger level completion and unlock progression | Pass |

<br>

## Testing Implications

The initial black-box testing draft helped us confirm that the most important gameplay loop is currently functioning at the prototype level. More importantly, it gave us a clearer idea of what needs to be tested in later stages.

The current testing also shows that our future test plan should continue to focus on:

- Record and replay state transitions.
- Clone generation and destruction.
- Collision between present self, past self, and platforms.
- Button, portal, and endpoint logic.
- High-frequency input and edge cases.
- Player-facing stability rather than only internal implementation correctness.

<br>

## Current Code and Demo Direction

By the end of Week 09, the project had moved from a single simple prototype to a more organised demo workflow. The version folders show a clear development path, where each version represents one focused improvement.

The current demo direction can be summarised as:

| Area | Progress |
|---|---|
| Core gameplay | Demo 1 initially completed |
| User guidance | Improved in Demo 2 |
| Recording UI | Improved |
| Replay control | Improved |
| Pause and hint systems | Added |
| i18n language support | Added |
| Tutorial content | Added |
| Visual feedback | Improved |
| Collision and recording bugs | Partially fixed |
| Test level skeleton | Added for future expansion |
| Initial black-box testing | Drafted and partially executed |

<br>

## Sprint 3 Outcome

By completing Sprint 3, our team produced two clearer demo versions and made the game more suitable for both presentation and testing.

The biggest achievement of this sprint was that we successfully transformed user evaluation findings into implementation work. Earlier problems such as unclear onboarding, limited feedback, and steep learning curve were addressed through floating prompts, tutorial content, i18n support, improved recording UI, and hint functionality.

At the same time, the creation of Demo 1 and Demo 2 helped us separate two goals:

- **Demo 1** demonstrates the core mechanic and basic gameplay loop.
- **Demo 2** demonstrates the improved player experience and interface support.

The initial black-box testing draft further helped us verify whether these demo versions are stable enough for the next round of evaluation and refinement.

<br>

## Remaining Issues

Although Sprint 3 made strong progress, several areas still need further development:

- Demo 1 and Demo 2 still need more systematic testing.
- Some collision and recording issues may require further refinement.
- The tutorial level needs to be tested with new players.
- UI layout and visual style need final consistency checks.
- The relationship between difficulty levels and demo versions should be clarified.
- The leaderboard system and map editor system still need more detailed technical design.
- More complete documentation and screenshots should be added to the repository.
- The current black-box testing report is still a demonstration draft and needs to be expanded into a more complete test document.
- White-box testing still needs to be planned after the internal code structure becomes more stable.

<br>

## Next Steps

In the next stage, we plan to:

- Test Demo 1 and Demo 2 with users.
- Compare feedback between the two demo versions.
- Continue refining recording and replay behaviour.
- Improve the tutorial based on player feedback.
- Polish the sidebar UI and pause / hint systems.
- Continue fixing collision and recording bugs.
- Expand the black-box testing report with more complete test cases.
- Plan white-box tests for important internal logic, such as state transitions and collision functions.
- Start designing the leaderboard system in more detail.
- Start designing the map editor system in more detail.
- Prepare clearer demo screenshots, GIFs, or videos for the GitHub repository.
