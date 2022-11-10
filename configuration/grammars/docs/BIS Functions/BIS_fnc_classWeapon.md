Returns class of weapon given by string.


---
*Syntaxes:*

weaponClass call `BIS_fnc_classWeapon`

---
*Example 1:*

```sqf
private _weaponConfig = currentWeapon player call BIS_fnc_classWeapon;
```