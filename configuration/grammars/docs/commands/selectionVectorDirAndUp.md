Searches for selection in the object model's LOD level, and returns the Direction and Up vectors in model space.


---
*Syntaxes:*

object `selectionVectorDirAndUp` [selectionName, LOD]

---
*Example 1:*

```sqf
vehicle player selectionVectorDirAndUp ["drivewheel_axis", "FireGeometry"] params ["_axisVectorDir", "_axisVectorUp"];
```