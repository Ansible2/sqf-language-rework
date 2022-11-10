Find the nearest road segment to certain position, within given radius.


---
*Syntaxes:*

[center`, radius, blacklist`] call `BIS_fnc_nearestRoad`

---
*Example 1:*

```sqf
private _nearestRoad = [getPosATL player, 500] call BIS_fnc_nearestRoad;
```

*Example 2:*

```sqf
private _nearestRoad = [getPosATL vehicle player, 50, getPosATL vehicle player nearRoads 20] call BIS_fnc_nearestRoad;
```