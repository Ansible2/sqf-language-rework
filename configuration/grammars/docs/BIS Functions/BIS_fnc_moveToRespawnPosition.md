Move given unit to given respawn position. Units moved to height <nowiki>>=</nowiki> 30m will start on parachute. Position [0,0,0] is blacklisted. This function must be executed where unit to be moved is `local`.


---
*Syntaxes:*

[unit, position, canBeDead] call `BIS_fnc_moveToRespawnPosition`

---
*Example 1:*

```sqf
[player, "SpawnMarker1"] call BIS_fnc_moveToRespawnPosition;
```