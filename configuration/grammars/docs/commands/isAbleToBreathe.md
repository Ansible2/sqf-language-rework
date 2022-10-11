If unit is diving and doesn't have a re-breather, it returns `false`. Diving means the unit's head is underwater. If unit is underwater and has a re-breather, the command returns `true`.


---
*Example 1:*
```sqf
_canBreath = isAbleToBreathe player;
```