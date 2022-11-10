Compute new object coordinates from given center and angle from MOTION BUILDER


---
*Syntaxes:*

[center, centerAngle, angle, iniPosition] call `BIS_fnc_sceneRotate`

---
*Example 1:*

```sqf
`1337,1337,0], 42, 120, [200,200,0` call BIS_fnc_sceneRotate; // returns [[1337.15,1334.18,0],-258]
```