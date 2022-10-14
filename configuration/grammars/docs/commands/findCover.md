Returns the object around where the unit finds cover. The minDist, visibilityPosition and ignoreObject parameters are optional.


---
*Syntaxes:*

object `findCover` [position, hidePosition, maxDist, minDist, visibilityPosition, ignoreObject]

---
*Example 1:*

```sqf
unit1 findCover [ASLToATL aimPos unit2, 30];
```