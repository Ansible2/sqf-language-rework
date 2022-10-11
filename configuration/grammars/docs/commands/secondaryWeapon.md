Returns the name of a unit's secondary weapon (launcher). To detect the weapon which is `currently` being used by the unit use `currentWeapon`.


---
*Example 1:*
```sqf
private _secondaryWeapon = secondaryWeapon player;
```

*Example 2:*
```sqf
hint secondaryWeapon player; // "launch_NLAW_F"
```