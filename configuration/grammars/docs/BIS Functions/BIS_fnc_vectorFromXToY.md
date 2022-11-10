Returns a unit vector that 'points' from `vector1` to `vector2`.
This is a very useful function as it can be used with the `velocity` command to move an object from one position to another (i.e `vector1` to `vector2`).


---
*Syntaxes:*

[vector1, vector2] call `BIS_fnc_vectorFromXToY`

---
*Example 1:*

```sqf
private _resultVector = [getPosASL vehicle player, getPosASL airTarget] call BIS_fnc_vectorFromXToY;
```