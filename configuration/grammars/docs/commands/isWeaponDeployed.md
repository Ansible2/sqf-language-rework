Returns true if weapon is currently deployed.


---
*Syntaxes:*

`isWeaponDeployed` unit

`isWeaponDeployed` [unit, onGround]

---
*Example 1:*

```sqf
_dep = isWeaponDeployed player;
```

*Example 2:*

```sqf
_depOnObj = isWeaponDeployed [player, false];
```