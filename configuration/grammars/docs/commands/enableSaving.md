Enable / disable saving of the game with an optional autosave.


---
*Example 1:*
```sqf
enableSaving false;		// saving disabled, does autosave - same as [false, true]
enableSaving true;		// saving enabled, does not autosave - same as [true, false]

enableSaving [false, false];	// saving disabled, does not autosave
enableSaving [false, true];		// saving disabled, does autosave
enableSaving [true, false];		// saving enabled, doesn't autosave
enableSaving [true, true];		// saving enabled, does autosave
```