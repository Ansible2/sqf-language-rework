Sets skill of given unit. Unlike `setSkill`, `setUnitAbility` can set values > 1. Even though the `skill` command will correctly return set value, the actual unit ability will be capped to max available.


---
*Example 1:*
```sqf
_unit setUnitAbility 1;
```

*Example 2:*
```sqf
bob setUnitAbility -log 0;
hint str skill bob; //1.#INF
```