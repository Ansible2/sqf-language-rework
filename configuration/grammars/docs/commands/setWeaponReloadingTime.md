Sets reloading `phase` on the given weapon's current ammo round.


---
*Syntaxes:*

vehicle `setWeaponReloadingTime` [gunner, muzzleName, reloadTime]

---
*Example 1:*

```sqf
_success = _vehicle setWeaponReloadingTime [gunner vehicle player, currentMuzzle gunner vehicle player, 0.5];
```

*Example 2:*

Boost RPM:

```sqf
unit addEventHandler ["Fired", {
	_this # 0 setWeaponReloadingTime [_this # 0, _this # 2, 1/3];
}];
```