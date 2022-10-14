Converts vector direction from world to model space in `render time scope`.


---
*Syntaxes:*

object `vectorWorldToModelVisual` worldDir

---
*Example 1:*

Convert world space vector [0,-10,4] to model space of object _airplane:

```sqf
private _vector = _airplane vectorWorldToModelVisual [0,-10,4];
```