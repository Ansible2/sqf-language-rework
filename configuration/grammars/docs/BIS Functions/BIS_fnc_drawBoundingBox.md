Draws bounding box around given objects.


---
*Syntaxes:*

[objects, color, draw] call `BIS_fnc_drawBoundingBox`

---
*Example 1:*

```sqf
[[BIS_building], [1,0,1,1], true] call BIS_fnc_drawBoundingBox;
```

*Example 2:*

```sqf
[[], [], false] call BIS_fnc_drawBoundingBox;
```