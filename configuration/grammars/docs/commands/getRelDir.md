Returns direction, which is relative to object's current direction, from given object to another object or position in the range from 0 to 360, the equivalent of `BIS_fnc_relativeDirTo`.
Taking the current `direction` of the object into account.


---
*Example 1:*
```sqf
_reldir = player getRelDir tank;
```