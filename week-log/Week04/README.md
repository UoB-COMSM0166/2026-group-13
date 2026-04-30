# Week 04 Tasks: Requirements Analysis

This week, our team focused on requirements analysis for our final game concept, **_U help U_**. Based on the paper prototype feedback from Week 03, we further clarified the game’s stakeholders, refined our epics and user stories, and reflected on how requirements engineering methods can help us turn a creative game idea into a feasible p5.js project.

---

## Overview

The main outcomes of this week are:

- A structured list of stakeholders related to the project.
- Epics and user stories added to the team Kanban board.
- A short reflection on what we learned about epics, user stories, acceptance criteria, and the context of our app.

📋 **Full Requirements Document**: [Requirements-v2.0.md](Requirements-v2.0.md)

---

## Stakeholders

We identified the following stakeholder groups for our game project:

<p align="center">
  <img src="img/Stakeholders.png" width="90%">
</p>

<p align="center"><b>Figure 1: Stakeholder onion model for <i>U help U</i></b></p>


| Stakeholder Group | Description |
| --- | --- |
| **Players** | The main users of the game, including new players, normal players, pro players, and potential players. |
| **Designers** | Team members responsible for level design, UI design, art design, and story design. |
| **Developers / Coders** | Team members responsible for implementing the game systems, maintaining modular code, and ensuring technical stability. |
| **Testers** | People who help test gameplay flow, identify bugs, and verify whether features work as expected. |
| **Lecturer / TA** | Academic assessors who evaluate whether the project meets the module requirements. |
| **Community Members** | Players or viewers who may share feedback, gameplay clips, or custom level ideas in the future. |
| **p5.js Platform** | The web-based development environment that constrains and supports our game implementation. |
| **Market-Related Personnel** | Marketing specialists, market researchers, and promotion specialists who would help position and promote the game if it were released publicly. |

These stakeholders helped us think beyond only the player’s direct interaction with the game. They also made us consider development maintainability, testing needs, market appeal, and assessment requirements.

---

## Epics and User Stories

After identifying stakeholders, we organised the project requirements into epics and user stories. This helped us connect high-level design goals with concrete implementation tasks.

### Player-Focused Epics

| Epic | Example User Need |
| --- | --- |
| **Basic Game Controls** | Players need responsive movement, jumping, restarting, and respawning so that they can explore levels smoothly. |
| **Core Recording Mechanic** | Players need to record and replay their actions so that their “past self” can help solve puzzles. |
| **Clone Collaboration** | Players need the clone to behave as a real entity so that it can trigger mechanisms, stand on platforms, or act as a stepping stone. |
| **Game UI and Navigation** | Players need clear menus, settings, hints, achievements, and difficulty options so that the game is easier to understand and navigate. |
| **Difficulty and Progression** | Players need a fair difficulty curve so that the game remains challenging but not frustrating. |

### Designer-Focused Epics

| Epic | Example User Need |
| --- | --- |
| **Level Design Flexibility** | Designers need level layouts and mechanisms to be easy to adjust so that puzzle flow and difficulty can be balanced efficiently. |
| **Visual Feedback** | Designers need interaction states to be visually clear so that players can understand mechanism changes without relying only on text. |
| **Achievement Configuration** | Designers need achievement conditions to be easy to modify so that new goals and rewards can be added later. |

### Developer-Focused Epics

| Epic | Example User Need |
| --- | --- |
| **Code Modularity** | Developers need level-specific logic to stay separate from core systems so that new levels can be added safely. |
| **Reusable Game Objects** | Developers need reusable entity structures so that players, clones, enemies, and interactive objects can be extended without rewriting core code. |
| **Testing and Debugging Support** | Developers and testers need structured debugging tools so that collision, movement, and level logic issues can be found more efficiently. |

---

## Kanban Board Progress

We added our epics and user stories to the team Kanban board to support task planning and progress tracking. The board helps us separate broad design goals from smaller development tasks, making it easier to assign work between design, programming, testing, and documentation.

The Kanban structure also helped us notice which requirements are already feasible in the current prototype and which ones should remain as future improvements. For example, core movement, recording, replaying, achievement, and leaderboard-related goals are closer to implementation, while community sharing, promotion campaigns, and advanced debugging tools are more suitable for future development.

---

## Reflection

Through this week’s requirements analysis, our team learned that epics, user stories, and acceptance criteria are not only documentation formats, but also practical tools for controlling project scope and improving design clarity.

At the epic level, we learned how to translate broad creative ideas into manageable development directions. For example, instead of treating the recording mechanic as one isolated feature, we connected it with several larger goals: puzzle-solving, low-frustration retrying, clone collaboration, and level progression. This made the central mechanic of **_U help U_** easier to evaluate and improve.

User stories helped us shift from a developer-centred mindset to a user-centred mindset. By using the format “As a..., I want..., so that...”, we described features through user value rather than only technical implementation. For instance, the clone is not just a replay object in code; from the player’s perspective, it is a tool for reaching platforms, activating mechanisms, and solving timing-based puzzles.

Acceptance criteria helped us think about whether our ideas are testable. Since our game relies on precise recording and replaying, we need clear conditions for judging whether a feature works correctly. For example, after a recording ends, the replayed clone should follow the same movement sequence under consistent physics rules. This kind of requirement makes the design easier to test and reduces ambiguity during implementation.

Overall, this week helped us understand that requirements analysis can support creativity rather than limit it. It gave our team a clearer framework for turning the game’s “past self collaboration” concept into a coherent, playable, and technically feasible p5.js game.

---

## Next Steps

Based on this week’s requirements analysis, our next steps are:

- Prioritise the most important player-facing features for implementation.
- Refine acceptance criteria for the core recording and replay system.
- Continue updating the Kanban board as features are implemented or revised.
- Use testing feedback to adjust difficulty, UI clarity, and level design.