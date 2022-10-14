Autosaves the game (used for Retry). The saving is not started immediately, the request for autosave is made instead. To check the status of the request, use `isSaving`. The game can then be loaded from the last autosave with `loadGame`. Will not save if the player is ` null` or dead.


---
*Syntaxes:*

`saveGame`

---
*Example 1:*

```sqf
saveGame;
```