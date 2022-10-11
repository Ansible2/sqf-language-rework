Returns name of unit's primary weapon. This command will also return a weapon class name if the weapon is not used by the player, for example, it is on the unit's back. Use `currentWeapon` to get the weapon the unit is using.


---
*Example 1:*
```sqf
_pWeap = primaryWeapon player;
```

*Example 2:*
```sqf
hint primaryWeapon player; // "arifle_MX_ACO_pointer_F"
```