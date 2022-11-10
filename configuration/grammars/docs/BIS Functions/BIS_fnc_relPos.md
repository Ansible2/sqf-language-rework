Returns a position that is a specified distance and compass direction from the passed position or object.


---
*Syntaxes:*

[origin, distance, direction] call `BIS_fnc_relPos`

---
*Example 1:*

```sqf
[[0,0,0], 1000, 50] call BIS_fnc_relPos; // [766.044,642.788,0]
```