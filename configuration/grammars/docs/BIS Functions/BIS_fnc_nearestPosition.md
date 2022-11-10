Function to find the nearest Object or position from a list, when compared to a given reference.


---
*Syntaxes:*

[items, origin] call `BIS_fnc_nearestPosition`

---
*Example 1:*

```sqf
// Find the nearest marker from player
_nearestMarker = [allMapMarkers, player] call BIS_fnc_nearestPosition;
```

*Example 2:*

```sqf
// Find the nearest marker to trigger using trigger onActivation code
_nearestMarker = [allMapMarkers, thisTrigger] call BIS_fnc_nearestPosition;
```