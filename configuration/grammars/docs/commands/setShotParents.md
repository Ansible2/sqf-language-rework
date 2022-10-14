Sets vehicle and instigator pair for the given projectile.


---
*Syntaxes:*

projectile `setShotParents` [vehicle, instigator]

---
*Example 1:*

```sqf
myProjectile setShotParents [vehicle bob, bob];
```

*Example 2:*

```sqf
tank addEventHandler ["Fired", {_this select 6 setShotParents [tank, commander tank]}];
```