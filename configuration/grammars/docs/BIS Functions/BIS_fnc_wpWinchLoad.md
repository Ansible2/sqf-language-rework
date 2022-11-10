WINCH LOAD `custom waypoint`.

Load a group into helicopter cargo using winch.


---
*Syntaxes:*

`Custom Waypoint arguments`: [limitHeight, winchID, crewman, failCode, loadCode]

---
*Example 1:*

```sqf
[player, dude, 50, 5, 1, rescuer, {hintC "Rescuer died!"}, {hintC "Dude saved"}] spawn BIS_fnc_wpWinchLoad;
```