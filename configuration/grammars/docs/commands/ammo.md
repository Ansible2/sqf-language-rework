Check how many rounds are left in the currently loaded magazine in the given muzzle. Since Arma v1.56 the command also returns ammo for units in vehicles.


---
*Example 1:*
```sqf
_count = player ammo "M16"; //returns 30 in case of a full magazine
```

*Example 2:*
```sqf
_count = player ammo "M203Muzzle";
```

*Example 3:*
```sqf
_count = player ammo primaryWeapon player;
```