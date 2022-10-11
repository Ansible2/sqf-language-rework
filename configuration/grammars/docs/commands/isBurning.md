Returns whether the unit is burning.
This returns true only if unit is damaged by nearby fire, it does `not` check whether a fireplace is burning, use `inflamed` command for that.


---
*Example 1:*
```sqf
if (isBurning player) then { player groupChat "I'm burning!!"; };
```