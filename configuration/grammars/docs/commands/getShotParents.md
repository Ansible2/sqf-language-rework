Returns shot information for the given projectile. If shot was fired by a soldier on foot or in FFV position in vehicle, the soldier is returned for the vehicle.


---
*Example 1:*
```sqf
_shotParents = getShotParents myProjectile;
```

*Example 2:*
```sqf
batmobile addEventHandler ["Fired", {systemChat str getShotParents (_this select 6)}];
```