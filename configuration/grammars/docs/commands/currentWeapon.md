Return the name of the currently selected weapon (on the primary turret for vehicles).


---
*Syntaxes:*

`currentWeapon` vehicle

---
*Example 1:*

```sqf
_weaponClass = currentWeapon (vehicle player);//Example: "M16A2GL"
```

*Example 2:*

```sqf
_weaponClass = currentWeapon player;
```