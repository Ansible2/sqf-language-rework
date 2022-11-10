Determines if side B is enemy to side A the way the game engine does it. The relationship table can be found here:  `Side relations`.


---
*Syntaxes:*

[sideA, sideB] call `BIS_fnc_sideIsEnemy`

---
*Example 1:*

```sqf
private _isEnemy = [west, east] call BIS_fnc_sideIsEnemy; //Checks if EAST is enemy to WEST.
```