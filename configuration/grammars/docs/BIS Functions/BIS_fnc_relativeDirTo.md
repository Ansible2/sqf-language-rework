Returns the relative direction from object 1 to object/position 2. Return value is always in between 0 and 360.


---
*Syntaxes:*

[from, to] call `BIS_fnc_relativeDirTo`

---
*Example 1:*

```sqf
[[0,0,0], player] call BIS_fnc_relativeDirTo;
```