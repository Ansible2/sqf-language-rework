Converts serialized data from `BIS_fnc_markerToString` into a `local` map marker


---
*Syntaxes:*

data call `BIS_fnc_stringToMarkerLocal`

---
*Example 1:*

```sqf
"|marker_0|[3799.0110,2781.9880,0.0000]|mil_pickup|ICON|[1,1]|0|Solid|Default|1|You are here" call BIS_fnc_stringToMarkerLocal;
```