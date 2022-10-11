Set the current level of damage for a specific Hit Point (specified by its config class). This command has no effect when `allowDamage` is set to `false`.


---
*Example 1:*
```sqf
vehicle player setHitPointDamage ["hitEngine2", 1.0];
```

*Example 2:*
```sqf
player setHitPointDamage ["hitHead", 0.5];
player setHitPointDamage ["hitBody", 0.5];
player setHitPointDamage ["hitHands", 0.5];
player setHitPointDamage ["hitLegs", 0.5];
```