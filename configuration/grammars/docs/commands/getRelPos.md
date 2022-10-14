Returns position that is given distance and relative direction away from original object.


---
*Syntaxes:*

object `getRelPos`  [distance, direction]

---
*Example 1:*

Find position 100 metres away at player's 3 o'clock:

```sqf
_relpos = player getRelPos [100, 90];
```