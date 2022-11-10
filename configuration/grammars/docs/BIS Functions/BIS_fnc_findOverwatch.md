Selects a position that provides overwatch onto another position.


---
*Syntaxes:*

[target, maxDistance, minDistance, minHeightAbove, searchCentre] call `BIS_fnc_findOverwatch`

---
*Example 1:*

```sqf
[getPosATL enemyTank, 300, 75, 20, getPosATL player] call BIS_fnc_findOverwatch;
```