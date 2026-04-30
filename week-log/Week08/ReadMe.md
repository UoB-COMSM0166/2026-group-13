# Week 08 Tasks: Quantitative Evaluation and Technical Challenges

<br>

In Week 08, our team moved from qualitative feedback to a more structured **quantitative user evaluation**. Following the weekly requirements, we completed evaluations with at least 10 users, wrote up the findings, and reconsidered two major technical challenges for our game.

This week also helped us connect user evaluation results with future development priorities. Based on the current game direction, we identified two preliminary technical challenges:

- **Leaderboard System**
- **Map Editor System**

These are technical implementation challenges rather than team-management or development-process challenges.

<br>

## Weekly Objectives

- Complete user evaluations with at least 10 users.
- Consider possible learning effects and swap the difficulty order during testing.
- Create a form to make data collection easier.
- Write up the findings of the quantitative user evaluations.
- Add the findings to the GitHub repository.
- Reconsider and document two technical challenges for the game.

<br>

## Evaluation Form

To make the evaluation process easier and more consistent, we created a web-based evaluation form. The form allows each participant to enter a participant ID, select the tested difficulty level, answer SUS usability questions, and complete NASA TLX workload ratings.

The form includes two main parts:

| Section | Purpose |
|---|---|
| System Usability Scale (SUS) | Measures the perceived usability of the game system |
| NASA Task Load Index (NASA TLX) | Measures perceived workload, including mental demand, physical demand, time pressure, effort, performance, and frustration |

The form also supports automatic score calculation and CSV export, which made it easier for the team to collect and analyse multiple evaluation records. The form can be seen <a href="./Evaluation/Week8 Evaluation Results.csv">here</a>

<br>

## Evaluation Method

We evaluated two difficulty levels:

- **Level 1 / Easy Mode**
- **Level 2 / Hard Mode**

To reduce the possible learning effect, participants did not all play the levels in the same order. Some participants started from Level 1, while others started from Level 2. This helped reduce the risk that the second level always felt easier simply because players had already learned the controls during the first attempt.

<br>

### Evaluation Procedure

1. Each participant played one difficulty level.
2. The participant completed the evaluation form.
3. The participant then played the other difficulty level.
4. The participant completed the form again.
5. The team exported the data as CSV and summarised the results.

<br>

## Quantitative Evaluation Results

We collected results from **10 participants** for each difficulty level, producing **20 main evaluation records** in total.

<br>

### SUS Results

| Difficulty | Number of Records | Average SUS Score |
|---|---:|---:|
| Level 1 / Easy Mode | 10 | 71.5 |
| Level 2 / Hard Mode | 10 | 73.3 |

The SUS scores suggest that both difficulty levels were generally usable. Level 2 received a slightly higher average SUS score, which may indicate that once players understood the core mechanic, the harder level still felt coherent and usable rather than confusing.

However, the difference is small, so we should not treat it as strong proof that Level 2 is more usable. Instead, it suggests that the current difficulty increase did not significantly damage the overall usability of the game.

<br>

### NASA TLX Results

| Difficulty | Number of Records | Average NASA TLX Score |
|---|---:|---:|
| Level 1 / Easy Mode | 10 | 37.9 |
| Level 2 / Hard Mode | 10 | 46.7 |

The NASA TLX results show that Level 2 produced a higher workload than Level 1. This matches our design expectation: the harder difficulty should require more attention, planning, timing, and effort.

<br>

### Workload Dimension Comparison

| NASA TLX Dimension | Level 1 Average | Level 2 Average | Observation |
|---|---:|---:|---|
| Mental Demand | 8.6 | 11.0 | Level 2 required more planning and decision-making |
| Physical Demand | 7.2 | 10.9 | Level 2 required more precise control |
| Temporal Demand | 9.7 | 10.9 | Level 2 created slightly more time pressure |
| Performance | 3.3 | 2.5 | Players felt slightly more successful in Level 2 after learning the mechanic |
| Effort | 10.3 | 13.2 | Level 2 required more effort |
| Frustration | 6.4 | 7.5 | Level 2 was somewhat more frustrating, but not excessively so |

<br>

## Findings

### 1. The Difficulty Difference Was Noticeable

The increase in NASA TLX score from Level 1 to Level 2 suggests that players did perceive the second difficulty level as more demanding. This means our difficulty structure is beginning to work.

<br>

### 2. Usability Remained Acceptable

Although Level 2 had a higher workload, its average SUS score remained close to Level 1. This suggests that the harder mode increased challenge without making the system feel unusable.

<br>

### 3. Learning Effect Still Needs Attention

Some players performed better or felt more confident during the second attempt because they had already learned the controls and the clone mechanic. Swapping the difficulty order helped reduce this effect, but future testing should continue using counterbalancing.

<br>

### 4. Guidance and Feedback Are Still Important

The evaluation confirms the importance of the improvements identified in Week 07. Players still benefit from clear control prompts, contextual guidance, and visible recording feedback. These are especially important for new players before they can fully enjoy the harder difficulty.

<br>

## Design Implications

Based on the quantitative evaluation, we identified several design directions:

| Finding | Design Response |
|---|---|
| Level 2 creates higher workload | Keep Level 2 as the harder mode, but monitor frustration |
| SUS remains acceptable | The difficulty increase is currently reasonable |
| Learning effect affects results | Continue swapping difficulty order in future tests |
| Players need clearer guidance | Continue implementing bilingual contextual prompts |
| Clone mechanic requires planning | Improve recording status and replay feedback |
| Harder levels require precision | Improve collision accuracy and control feel |

<br>

# Technical Challenges

Now that the game is underway, we reconsidered the technical challenges of the project. We identified two main technical challenges that are directly related to implementation complexity and long-term game quality.

<br>

## Technical Challenge 1: Leaderboard System

The leaderboard system is a technical challenge because it requires reliable data recording, score comparison, account handling, and synchronisation between local gameplay and stored ranking data.

<br>

### Why It Is Technically Challenging

The leaderboard is not just a simple score display. It needs to support:

- Storing each player’s level completion records.
- Ranking players by performance.
- Handling repeated attempts and updated scores.
- Supporting both guest players and registered players.
- Keeping player identities distinguishable even when names are similar.
- Updating leaderboard data after a level is completed.
- Showing the leaderboard in a clear and responsive UI.

<br>

### Main Implementation Problems

| Problem | Technical Concern |
|---|---|
| Score definition | Need to decide whether ranking uses time, number of recordings, deaths, or a combined score |
| Data persistence | Scores must be stored reliably instead of disappearing after refresh |
| Guest vs registered users | Guest records may need to be migrated if the player creates an account |
| Duplicate names | Players with the same display name still need unique identifiers |
| Real-time update | The leaderboard should refresh after a new score is submitted |
| Data validation | Invalid or incomplete records should not be uploaded |
| UI integration | The leaderboard should be readable after level completion |

<br>

### Planned Direction

Our preliminary plan is to design the leaderboard around level completion records. Each record may include:

```text
playerId
levelId
difficulty
completionTime
recordingCount
timestamp
```

This structure would allow us to rank players by different criteria while keeping the system flexible for future expansion.

<br>

## Technical Challenge 2: Map Editor System

The map editor system is another major technical challenge because it requires the game to support user-created or developer-created level layouts in a structured and editable way.

<br>

### Why It Is Technically Challenging

A map editor is more complex than manually writing levels in code. It needs a structured way to create, modify, save, load, and validate level data.

The editor may need to support:

- Placing platforms, spikes, buttons, portals, and other objects.
- Moving and resizing objects.
- Saving level layouts into a structured data format.
- Loading saved levels back into the game.
- Checking whether a level is valid and playable.
- Avoiding impossible or broken level designs.
- Connecting buttons, portals, traps, and other mechanisms.

<br>

### Main Implementation Problems

| Problem | Technical Concern |
|---|---|
| Level data format | Need a consistent JSON-like structure for storing entities |
| Object placement | Editor must convert mouse input into correct game coordinates |
| Object editing | Existing objects need to be selectable, movable, and removable |
| Save / load | Level layouts should be serialised and restored correctly |
| Mechanism linking | Buttons may need to control specific platforms, traps, or portals |
| Validation | The editor should prevent invalid or impossible layouts |
| Integration | Levels created in the editor must work with collision, physics, recording, and replay systems |

<br>

### Planned Direction

Our preliminary plan is to represent each level as structured data rather than hard-coded object creation. For example:

```text
levelId
spawnPoint
platforms[]
spikes[]
buttons[]
portals[]
```

This would make levels easier to edit, test, and expand. It also supports future features such as community-created levels or internal designer tools.

<br>

## Weekly Outcome

By the end of Week 08, our team completed a more formal round of user evaluation and gained clearer evidence about the current difficulty design. The quantitative results suggest that the harder level creates a higher workload while still remaining usable, which supports our current Easy / Hard difficulty direction.

We also clarified two technical challenges for the project: the leaderboard system and the map editor system. Both systems are important because they extend the game beyond a simple demo. The leaderboard supports replayability and competition, while the map editor supports long-term level design, testing, and content expansion.

<br>

## Next Steps

In the next stage, we will:

- Continue refining the two difficulty levels.
- Improve contextual instructions and recording feedback.
- Use the evaluation findings to adjust level design.
- Define the leaderboard scoring model.
- Decide the data structure for leaderboard records.
- Design the first version of the map editor data format.
- Explore how edited maps can be loaded into the current game system.
- Add the technical challenge documentation to the repository.



## Questionnaire Form Link 
This is our questionnaire for evaluation.

[Click here to open the Game Evaluation Form (SUS & NASA TLX)](https://forms.office.com/e/HcJFE5vqTi)
