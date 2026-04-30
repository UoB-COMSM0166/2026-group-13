# Week 09 Tasks: Sprint 3 and Demo 1 / Demo 2 Development

<br>

In Week 09, our team completed **Sprint 3** and made significant progress on the development of **Demo 1** and **Demo 2**. Compared with the earlier MVP demo, this sprint focused on iterative improvement, feature refinement, interface upgrades, bug fixing, and preparing two clearer demo versions for testing and presentation.

The main outcome of this week is that the game is no longer just a basic playable prototype. It now contains a more complete gameplay structure, improved recording and replay support, better UI feedback, early tutorial content, and a clearer separation between different demo versions.

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

During this week, we initially completed the production of **Demo 1** and **Demo 2**. These two demos are used to present and test different stages of the game's development. These teo demo can still be played in our final game version.

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

<br>

## Sprint 3 Outcome

By completing Sprint 3, our team produced two clearer demo versions and made the game more suitable for both presentation and testing.

The biggest achievement of this sprint was that we successfully transformed user evaluation findings into implementation work. Earlier problems such as unclear onboarding, limited feedback, and steep learning curve were addressed through floating prompts, tutorial content, i18n support, improved recording UI, and hint functionality.

At the same time, the creation of Demo 1 and Demo 2 helped us separate two goals:

- **Demo 1** demonstrates the core mechanic and basic gameplay loop.
- **Demo 2** demonstrates the improved player experience and interface support.

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

<br>

## Next Steps

In the next stage, we plan to:

- Test Demo 1 and Demo 2 with users.
- Compare feedback between the two demo versions.
- Continue refining recording and replay behaviour.
- Improve the tutorial based on player feedback.
- Polish the sidebar UI and pause / hint systems.
- Continue fixing collision and recording bugs.
- Start designing the leaderboard system in more detail.
- Start designing the map editor system in more detail.
- Prepare clearer demo screenshots, GIFs, or videos for the GitHub repository.
