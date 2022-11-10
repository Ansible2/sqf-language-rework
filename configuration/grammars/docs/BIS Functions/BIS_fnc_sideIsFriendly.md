Determines if side B is friendly to side A the way the game engine does it. The relationship table can be found here:  `Side relations`.


---
*Syntaxes:*

[sideA, sideB] call `BIS_fnc_sideIsFriendly`

---
*Example 1:*

```sqf
private _isFriendly = [west, east] call BIS_fnc_sideIsFriendly; //Checks if EAST is friendly to WEST.
```