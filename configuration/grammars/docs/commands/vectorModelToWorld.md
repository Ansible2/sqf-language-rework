Converts vector direction from model to world space.


---
*Syntaxes:*

object `vectorModelToWorld` modelDir

---
*Example 1:*

Convert model space vector [0,-10,4] to world space; vector gets rotated according to _airplane: 

```sqf
_airplane vectorModelToWorld [0,-10,4];
```