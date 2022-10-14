Returns the velocity (speed vector) of the vehicle as an array with format [x, y, z]. Vector is in model space.


---
*Syntaxes:*

`velocityModelSpace` vehicle

---
*Example 1:*

```sqf
velocityModelSpace _chopper;
comment "Returns [X (left(-) right(+)), Y (backward(-) forward(+)), Z (down(-) up(+))]";
```