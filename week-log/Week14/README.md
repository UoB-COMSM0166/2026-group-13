# Week 14 Tasks: Sustainability Impact Analysis

<br>

In Week 14, our team focused on the **sustainability impact analysis** of *U Help U*. Following the weekly task requirements, we reviewed sustainability from multiple dimensions, connected our discussion to the Sustainability Awareness Framework, and considered Green Software Foundation implementation patterns.

The main goal of this week was to ensure that sustainability was not treated as an extra paragraph at the end of the report, but as a meaningful part of how we evaluate our game, our technical choices, and our responsibility towards players and future maintainers.

<br>

## Weekly Objectives

- Finish the sustainability impact analysis for the game.
- Use the Sustainability Analysis Framework / Sustainability Awareness Framework to structure our discussion.
- Review Green Software Foundation implementation patterns.
- Add the sustainability analysis to the project repository.
- Show evidence of the game’s impact across the **environmental dimension** and at least two other sustainability dimensions.
- Connect sustainability with ethics, accessibility, maintainability, and long-term project development.

<br>

## Sustainability Analysis Overview

For *U Help U*, we analysed sustainability across three main dimensions:

| Dimension | Focus in Our Project |
|---|---|
| Environmental | Lightweight web-based deployment, controlled asset size, browser runtime efficiency |
| Social | Accessibility, bilingual support, inclusive onboarding, non-punitive gameplay design |
| Technical | Modular architecture, maintainability, extensibility, responsible data handling |

Ethics and accessibility were treated as cross-cutting concerns because they affect how players access, understand, and experience the game.

<br>

# 1. Environmental Impact

The most direct environmental consideration of *U Help U* is that it is a relatively lightweight browser-based game. Since the game is developed with **p5.js** and can run directly in the browser, players do not need to download a large standalone package or install heavy software.

<br>

## Environmental Strengths

| Area | Sustainability Impact |
|---|---|
| Browser-based access | Reduces installation overhead and avoids large standalone distribution packages |
| Lightweight 2D assets | Helps reduce GPU load compared with more resource-heavy 3D rendering |
| Controlled asset usage | Reduces unnecessary bandwidth and loading cost |
| No large patch system | Players can access the latest version through the web page |
| Modular codebase | Reduces wasteful rework when features are modified or extended |

<br>

## Green Software Considerations

After reviewing Green Software Foundation-style implementation patterns, we considered how the project could reduce unnecessary computational and maintenance costs.

The current game already follows several relevant directions:

- Use 2D rendering rather than heavy 3D rendering.
- Avoid unnecessary visual complexity where it does not support gameplay.
- Keep assets relatively lightweight.
- Reuse entities, systems, and UI components instead of duplicating logic.
- Structure code into separate modules to reduce rework.
- Avoid unnecessary data collection from players.

<br>

## Limitations

We should not claim that the project is completely environmentally friendly. The game still uses image assets, audio assets, animations, and browser computation. However, within the scope of a student game project, we made reasonable choices to balance visual quality, gameplay needs, and resource efficiency.

<br>

# 2. Social, Ethical, and Accessibility Impact

The social dimension is closely connected to the design values of the game. *U Help U* is not built around defeating others or punishing players harshly. Instead, it asks players to observe, plan, record, replay, and cooperate with their own past actions.

This creates a more constructive interpretation of failure: previous attempts are not wasted, but become useful resources for future success.

<br>

## Social Design Values

| Area | Impact |
|---|---|
| Self-collaboration mechanic | Encourages planning, reflection, and learning from previous attempts |
| No strong punishment loop | Reduces frustration and supports experimentation |
| Tutorial support | Helps new players learn gradually |
| Bilingual prompts | Supports both English and Chinese users |
| Contextual onboarding | Reduces memory burden by showing help when needed |
| Configurable key bindings | Allows players to adjust controls to their own preference |

<br>

## Accessibility Features

During development, we improved accessibility and onboarding through several features:

- Bilingual English / Chinese interface and prompts.
- Context-sensitive key prompts near interactive objects.
- Tutorial system for explaining the record-and-replay mechanic.
- Clear distinction between present self and past self.
- Pause menu and settings system.
- Configurable key binding system.
- Keyboard navigation support for menus and pause interfaces.

These features make the game easier to understand for first-time players and reduce the cognitive load of learning a time-based clone mechanic.

<br>

## Ethical Considerations

The game limits the amount of player information required. Players can access and play the game without needing to provide sensitive personal information. This reduces unnecessary privacy risk.

At the same time, we considered the possible pressure created by competitive systems such as leaderboards. Although the leaderboard can support replayability and motivation, it may also create comparison pressure for some players. Therefore, the leaderboard should be presented as an optional challenge rather than the only measure of success.

<br>

## Limitations

Current accessibility support is still not complete. Future versions could improve:

- Colour-blind mode.
- Screen reader compatibility.
- More complete controller support.
- Additional accessibility options for players with physical impairments.
- More detailed difficulty customisation.

<br>

# 3. Technical Sustainability

Technical sustainability is one of the most important dimensions for this project because *U Help U* developed from a small prototype into a larger modular game system. A sustainable codebase should be understandable, maintainable, and extendable by future developers.

<br>

## Modular Architecture

The final game structure includes multiple independent systems, such as:

- Level management system
- Event system
- Collision system
- Physics system
- Character control system
- Record system
- UI system
- Tutorial system
- Achievement system
- Leaderboard system
- Map editor system
- i18n system
- Key binding system

This modular structure reduces tight coupling. It also makes it easier for future developers to fix bugs, extend levels, add new entities, or improve individual systems without rewriting the whole project.

<br>

## Technical Sustainability Benefits

| Technical Choice | Sustainability Benefit |
|---|---|
| Event-based communication | Reduces direct dependencies between modules |
| Entity-based game structure | Makes game objects easier to extend |
| Separate UI and gameplay systems | Prevents UI changes from breaking core gameplay |
| i18n language package | Makes text easier to update and translate |
| Map editor direction | Supports future content creation and level expansion |
| Technical documentation | Helps future maintainers understand the system |
| GitHub versioning | Preserves development history and supports collaboration |

<br>

## Maintainability and Future Work

The technical impact of the project is not only about whether the game works now. It is also about whether the project can be responsibly maintained in the future.

For this reason, the team focused on:

- Clear folder structure.
- More explicit module boundaries.
- Technical documentation for major systems.
- Diagrams and README files.
- Reusable systems instead of hard-coded one-off logic.
- Refactoring when early architecture became difficult to extend.

This reflects the idea that sustainability also includes long-term maintainability and knowledge transfer.

<br>

# Sustainability Awareness Framework Reflection

Using the Sustainability Awareness Framework helped us consider not only immediate gameplay impact, but also longer-term effects.

<br>

## Immediate Effects

- Players can access the game directly through the browser.
- New players receive tutorial and contextual guidance.
- The game can be played without heavy installation.
- The UI and language settings improve accessibility.

<br>

## Enabling Effects

- The modular codebase enables future feature development.
- The map editor enables more level content and potential community creativity.
- The leaderboard enables replayability and player motivation.
- Documentation enables future students or maintainers to understand the project.

<br>

## Structural Effects

- The game promotes a non-punitive interpretation of failure.
- The technical architecture supports long-term extension.
- Sustainability thinking influenced both design and implementation choices.
- Future development can build on existing systems rather than restarting from scratch.

<br>

# Evidence Added to the Repository

The sustainability analysis was added to the project report under the **Sustainability, ethics and accessibility** section. The final report discusses:

- Environmental sustainability through lightweight browser-based deployment and resource-conscious design.
- Social sustainability through inclusive onboarding, bilingual support, and a non-punitive game mechanic.
- Technical sustainability through modular architecture, responsible data handling, and maintainability.
- Accessibility and ethics as cross-cutting concerns.

<br>

## Weekly Outcome

By the end of Week 14, we completed the sustainability impact analysis and connected it to the final project report. This helped us show that *U Help U* is not only a playable game, but also a project with considered environmental, social, ethical, accessibility, and technical implications.

The most important outcome of this week was recognising that sustainability is not limited to reducing energy usage. It also includes how the game treats players, how accessible it is, how responsibly data is handled, and whether the system can be maintained and extended by future developers.

<br>

## Next Steps

After Week 14, we will:

- Check that the sustainability section is clearly linked in the final report.
- Ensure sustainability evidence is visible in the project repository.
- Continue polishing the final submission.
- Check all README links and report references.
- Prepare for the final presentation and demonstration.
- Keep the sustainability limitations honest and avoid overclaiming.
