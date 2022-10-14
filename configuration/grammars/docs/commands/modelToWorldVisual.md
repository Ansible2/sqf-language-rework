Converts position from object model space to world space in render time scope. For ASL version see `modelToWorldVisualWorld`.


---
*Syntaxes:*

object `modelToWorldVisual`  modelPos

---
*Example 1:*

```sqf
_aboveAndBehindPlayer = player modelToWorldVisual [0,-1,3];
```