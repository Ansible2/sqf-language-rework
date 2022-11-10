Displays or logs animation states:
*`animChanged` - When action is performed (only to debug.log)
*`animDone` - When animation chain that was started by action is finished (only to debug.log)
*`animStateChanged` - Each animation state changes(debug.log + globalchat).


---
*Syntaxes:*

[target] call `BIS_fnc_diagAnim`

---
*Example 1:*

```sqf
call BIS_fnc_diagAnim;
```