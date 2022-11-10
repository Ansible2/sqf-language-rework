Returns the gradient angle (in radians) of the terrain at a specified position and a compass direction.
It is an angle of the slope of a tangent plane to the terrain at the specified position in the specified direction.


---
*Syntaxes:*

<!-- [object, direction, delta] call `BIS_fnc_terrainGradAngle`; -->

---
*Example 1:*

```sqf
private _radGrad = [getPos player, getDir player] call BIS_fnc_terrainGradAngle;
```