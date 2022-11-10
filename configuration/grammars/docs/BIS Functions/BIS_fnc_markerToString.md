Converts existing marker to `String`, for example: **<nowiki>"|marker_0|[3799.0110,2781.9880,0.0000]|mil_pickup|ICON|[1,1]|0|Solid|Default|1|You are here"</nowiki>**


---
*Syntaxes:*

[markerName, delimiter] call `BIS_fnc_markerToString`

---
*Example 1:*

```sqf
"marker1" call BIS_fnc_markerToString;
```

*Example 2:*

```sqf
["marker1", ":"] call BIS_fnc_markerToString;
```