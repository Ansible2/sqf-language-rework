Logs (using `diag_log`) a debug message (`profileName`, `playerUID`, `_fnc_scriptName`, provided text) to `server`<nowiki/>'s `.RPT`. In singleplayer, `BIS_fnc_logFormat` is used.


---
*Syntaxes:*

[text, argument1, argument2, ...] call `BIS_fnc_logFormatServer`

---
*Example 1:*

```sqf
private _currentFPS = diag_fps;
if (_currentFPS < 10) then
{
	["Player %1 has performance issues (%2 FPS)", name player, _currentFPS] call BIS_fnc_logFormatServer;
};
```