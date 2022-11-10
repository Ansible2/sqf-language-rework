This function adds a `Waypoints#Seek_.26_Destroy|Seek and Destroy` waypoint on defined position to the group and set its `behaviour` to "AWARE". If the group has other waypoints, the waypoint will be added at the end of the list.


---
*Syntaxes:*

[group, position] call `BIS_fnc_taskAttack`

---
*Example 1:*

```sqf
[opforGroup, getPosATL player] call BIS_fnc_taskAttack;
```