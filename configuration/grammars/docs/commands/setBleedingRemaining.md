Sets for how many seconds injured unit leaves blood trail.
The unit damage must be >= 0.1 for this command to have an effect, otherwise, the `getBleedingRemaining` will return 0 and no blood trail is left behind.


---
*Example 1:*
```sqf
_unit setBleedingRemaining 60;
```

*Example 2:*
```sqf
player setDamage 0.25;
player setBleedingRemaining 120;
```