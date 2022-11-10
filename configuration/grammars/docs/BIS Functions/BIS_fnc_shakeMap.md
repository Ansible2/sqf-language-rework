"Camera shake" function for the map. Shakes the map for a given amount of time with a given amount of force around the given camera center. Exits if map is not open.


---
*Syntaxes:*

[duration, magnitude, center] call `BIS_fnc_shakeMap`

---
*Example 1:*

```sqf
[2,20,getMarkerPos "BIS_markerExtraction0"] call BIS_fnc_shakeMap;
```

*Example 2:*

```sqf
[2,20,getPos player] call BIS_fnc_shakeMap;
```