Converts vector from model to world space in render time scope.


---
*Syntaxes:*

object `vectorModelToWorldVisual` modelDir

---
*Example 1:*

Convert model space vector [0,-10,4] to world space; vector gets rotated according to _airplane: 

```sqf
_airplane vectorModelToWorldVisual [0,-10,4];
```