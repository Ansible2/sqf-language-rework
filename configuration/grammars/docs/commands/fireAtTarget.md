Remotely forces a unit to fire the given weapon. See also `BIS_fnc_fire`.


---
*Syntaxes:*

sourceVehicle `fireAtTarget` [targetVehicle, weaponMuzzleName]

---
*Example 1:*

```sqf
_handle = this fireAtTarget [groundtarget1,"HellfireLauncher"];
```

*Example 2:*

```sqf
_handle = Igla_AA_pod_TK_EP1 fireAtTarget [_helicopter, currentWeapon Igla_AA_pod_TK_EP1];
```

*Example 3:*

```sqf
_handle = Igla_AA_pod_TK_EP1 fireAtTarget [helicopter];
```