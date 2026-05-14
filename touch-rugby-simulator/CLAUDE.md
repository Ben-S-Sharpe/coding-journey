# Touch Rugby Play Simulator

## Goal
A coaching tool to build, animate, and save touch rugby plays. Not a game — no scoring or rules enforcement. The focus is on positioning players and showing how a play unfolds step by step.

## Player Positions
- **W** = Wing
- **L** = Link
- **M** = Middle

6 attack players (red) and 6 defence players (blue). Players are identified by position label only — no individual names needed.

## Phases

### Phase 1 — Pitch ✅
SVG pitch with halfway line, try lines, and sub boxes on each side.

### Phase 2 — Players ✅
12 players placed in default positions with position labels (W, L, M).

### Phase 3 — Drag & Drop (current)
- Click and drag individual players anywhere on the pitch
- Smooth mouse tracking

### Phase 4 — Animated Group Controls
- Buttons panel for preset group movements (e.g. "Defence Step Up", "Attack Shift Left", "Reset")
- Players glide to new positions using animation (not instant jumps)
- Each button maps to a set of target coordinates per player

### Phase 5 — Play Recording
- Manual frame model: arrange players, press "Add Frame" to save that snapshot
- Simultaneous movements are handled naturally — you position everyone then lock the frame
- "Play" button animates frame 1 → 2 → 3 etc, all players moving at once
- "Step Forward / Back" to scrub through frames manually

### Phase 6 — Save & Load Plays
- Name a play and save to localStorage
- Load saved plays from a menu
- Export/import as JSON for sharing

## Key Decisions
- **Manual frames over auto-recording**: gives full control over what counts as a "moment" in the play. Especially important when multiple players move at once (e.g. a sub rotation).
- **Positions not names**: W/L/M labels are sufficient for the coaching use case.
- **Solo use**: designed for one person setting up plays on screen, not multiplayer or projector-specific layout.
