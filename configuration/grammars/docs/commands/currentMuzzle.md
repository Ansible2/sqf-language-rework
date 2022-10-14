Returns a unit's current weapon muzzle. Does not work on vehicles.


---
*Syntaxes:*

`currentMuzzle` unit

---
*Example 1:*

```sqf
_muzzle = currentMuzzle player;
```

*Example 2:*

```sqf
_muzzle = currentMuzzle (gunner (vehicle player));
```