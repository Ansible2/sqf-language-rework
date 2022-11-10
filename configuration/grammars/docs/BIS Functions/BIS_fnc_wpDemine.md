Scripted "CLEAR MINES" `Advanced Waypoint`.
The script needs a unit with the abiility to demine (engineer or explosive specialist `trait` `and` a toolkit).


---
*Syntaxes:*

[group, position, target, clearUnknownMines] call `BIS_fnc_wpDemine`

---
*Example 1:*

```sqf
[group player, getMarkerPos "mineField", objNull, false] call BIS_fnc_wpDemine;
```