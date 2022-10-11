Return the movement precision of the given entity, how is the entity able to be precise when moving to given target.


---
*Example 1:*
```sqf
// used in formationCDanger.fsm
if (getPosATL _this distance _dangerPos <= precision _this) then { /* ... */ };
```