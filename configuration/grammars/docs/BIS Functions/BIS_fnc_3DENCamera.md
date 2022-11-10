Moves Eden's camera depending on one of two modes:
* "random" - A random position over land preferring non forested areas
* "selected" - The current selected Eden entity or users cursor position if nothing is selected


---
*Syntaxes:*

[mode] call `BIS_fnc_3DENCamera`

---
*Example 1:*

Move Eden's camera to the currently selected Eden entity

```sqf
["selected"] call BIS_fnc_3DENCamera;
```

*Example 2:*

Move Eden's camera to a random position

```sqf
["random"] call BIS_fnc_3DENCamera;
```