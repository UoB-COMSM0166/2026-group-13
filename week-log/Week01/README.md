## Game Research

This week we conducted preliminary research and feasibility assessment from two perspectives:

- Commercial game samples: We analysed over 50 games, focusing on their p5.js implementation feasibility, and categorised them by game genre, interaction style, map structure, survival mechanics, gameplay highlights, respawn systems, and attack patterns.
- Previous group project samples: We reviewed 18 past group projects, extracting game types, project descriptions, and reference value to compare the implementation difficulty and innovation potential of our own design.

📋 **Game Research Summary**: [Reference Games — Everyone](https://angelica-serein.notion.site/Reference-Games-Everyone-d83b2f38a2aa8273b95f01f7046d4f93?source=copy_link)

### Figure 1: Commercial Games Summary Screenshots

<p align="center">
  <img src="img/game research1.png" width="90%">
  <img src="img/game research2.png" width="90%">
</p>

### Figure 2: Previous Group Projects Summary Screenshot

<p align="center">
  <img src="img/game research3.png" width="90%">
</p>

Based on the above research, our design direction will prioritise:

- Gameplay with a clear core loop, direct feedback, and mechanics that can be implemented incrementally.
- Retaining some space for mechanic synergy and narrative expression while ensuring implementation feasibility.

## Individual Game Research Summaries

### Siqi (Reference Game: The Final Station)

- Full write-up: [Siqi_GameResearch.md](Siqi_GameResearch.md)

- Analysed the level loop: "arrive at station → explore → resource and risk management → complete objective → evacuate".
- Identified a reusable level structure: linear main path + small branches + trigger-based unlocks (power, access control, switches).
- Highlighted how a "weak protagonist" and scarce resources (ammo, medicine) create tension — well-suited to modular group development.
- Noted that environmental storytelling (lighting, sound, scene details, text fragments) can enhance immersion at low cost.

### Wenlei (Reference Direction: Casual Games + Environmental Narrative Games)

- Full write-up: [Wenlei_GameResearch.md](Wenlei_GameResearch.md)

- Summarised the importance of instant feedback, physics simulation, and low-barrier rules from casual games like Fruit Ninja and Cut the Rope.
- Noted that high-frequency, low-latency visual feedback significantly improves gameplay feel and player retention.
- Extracted a "minimal text narrative" approach from INSIDE and Little Nightmares: conveying story through scenes, symbols, and behaviour.
- Emphasised "puzzles as narrative vehicles", letting players piece together the story through interaction.

### Xuelin (Reference Game: Hollow Knight)

- Full write-up: [Xuelin_GameResearch.md](Xuelin_GameResearch.md)

- Mapped the core trade-off in the combat system: the same resource (Soul) is used for both dealing damage and healing.
- Summarised the exploration loop: explore → combat → fail/succeed → learn → explore further.
- Highlighted how non-linear maps and multi-path progression enhance replayability and exploration motivation.
- Proposed a "less text, more environmental storytelling" approach, suitable for action-exploration projects.

### ZJR (Reference Games: Degrees of Separation + Stranger Things series)

- Full write-up: [zjr_GameResearch.md](zjr_GameResearch.md)

- Studied the "dual-world parallel" structure: two worlds with different rules whose states mutually influence each other.
- Identified a "collect side / combat side" cooperation loop: one side gathers resources, the other converts them into combat advantages.
- Focused on two-player co-op and synchronised goal completion, emphasising division of labour and shared consequences.
- Favoured simplified controls with prominent rule synergy for web-based pixel-style implementation.

### ZZQ (Reference Game: UVSU)

- Full write-up: [research_game_analysis_uvsu_zzq.md](research_game_analysis_uvsu_zzq.md)

- Studied a deterministic platform puzzle system where the core mechanic is "your past self" acting as an enemy/challenge.
- Summarised the causality-driven gameplay: move/jump → trigger mechanism → counter past behaviour → collect key → unlock new area.
- Highlighted light-punishment design (instant respawn, low failure cost) to encourage experimentation and learning.
- Suggested this approach suits time-replay mechanics, stacked mechanics, and causality-chain level design.

### Overall Team Insights

- Most research converged on the universal design framework: "clear core loop + progressive complexity + explicit feedback".
- Narrative approaches generally favour environmental and mechanic-driven storytelling over heavy text.
- Viable project directions include: dual-world interaction, resource trade-offs, survival pressure, cooperative roles, and time-replay puzzles.
