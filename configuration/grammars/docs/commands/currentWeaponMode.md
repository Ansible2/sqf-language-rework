Returns current weapon mode of unit's weapon. Result can be: "Single", "Burst", "FullAuto", "manual", "player"


---
*Example 1:*
```sqf
_weaponMode = currentWeaponMode player;
```

*Example 2:*
```sqf
_weaponMode = currentWeaponMode gunner vehicle player;
```