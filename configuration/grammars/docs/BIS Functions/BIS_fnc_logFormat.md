Display debug message.


---
*Syntaxes:*

[text, parameters] call `BIS_fnc_logFormat`

---
*Example 1:*

```sqf
["My logged name: %1, My position: %2", name player, getPos player] call BIS_fnc_logFormat;
// RPT output:
// 12:34:56 "BIS_fnc_log: [BIS_fnc_debugConsoleExec] My logged name: Miller, My position: [4866.73,21947.9,0.00143433]"
```