# Preparation for the Final Demo

## Demo Flow Diagram

&emsp;&emsp;This week we organised and created the complete flow diagram for the final demo presentation, covering the full sequence from the opening introduction, core gameplay demo, two technical challenges (Leaderboard & Account System; Level Editor & Sharing System), to the special features showcase. This helped the whole team align on the pacing and division of responsibilities.

<p align="center">
  <img src="demo flow.png" width="90%">
</p>

<p align="center"><b>Figure 1: Demo Flow Diagram</b></p>

<p align="center">
  <img src="demo flow with comments.png" width="90%">
</p>

<p align="center"><b>Figure 2: Demo Flow Diagram with Comments</b></p>

---

## Presentation Script Summary

&emsp;&emsp;We also wrote a bilingual (Chinese/English) presentation script. Key content is summarised below:

### Core Gameplay

- The game is a 2D platform puzzle game where the focus is on **understanding the mechanics**, not just reflexes.
- Players press **C** to start recording — all actions are captured. Press **R** to replay, summoning an **invincible phantom** that precisely repeats those actions.
- Level 1 includes a built-in tutorial system that automatically highlights key areas to help players grasp the mechanics.
- Every level features **multiple valid solutions**, avoiding the repetitiveness of a pure platformer.

### Level Design

- Easy Mode has 4 levels, each introducing a new element or mechanic.
- Hard Mode combines multiple mechanics; Level 3 alone contains **5 distinct puzzles**, each with up to 3 solutions.
- Total average playtime across all levels is approximately **2 hours**. Each level was tested at least 20 times internally, with no known bugs.

### Tech Challenge 1: Leaderboard & Account System

- After each level, the **top-10 leaderboard** is shown, including current run time, personal best time, and personal best ranking.
- Supports both guest and registered users (registered users display a crown icon).
- Name changes sync to the leaderboard in real time; duplicate names are automatically given a number suffix.

### Tech Challenge 2: Level Editor & Sharing System

- The built-in level editor supports placing terrain, traps, buttons, doors, portals, and more — all uploadable to the shared area in one click.
- Other players can search and play community levels in **Map Plaza**.
- On upload, the visual layout is converted to structured data; on download, the original layout is reproduced with 100% accuracy.

### Special Features

- In a specific level, the phantom can **read the map terrain and player actions** and speak interactively (AI-powered, with controlled API usage).
- An achievement system is included; several achievements were pre-triggered to demonstrate the effect.

📄 **Full Bilingual Presentation Script**: [U_Help_U_bilingual.md](U_Help_U_bilingual.md)
