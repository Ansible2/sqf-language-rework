Lock/Unlock stabilized camera to target. Works only on turrets which have optic mode selected with `direction stabilization enabled`.


---
*Syntaxes:*

vehicle `lockCameraTo` [target, turretPath]

vehicle `lockCameraTo` [target, turretPath, temporary]

---
*Example 1:*

```sqf
uav lockCameraTo [vehicle, [0,0]];
```

*Example 2:*

```sqf
uav lockCameraTo [objNull, [0,0]]; // unlocks the turret
```

*Example 3:*

```sqf
vehicle player lockCameraTo [enemyTarget, vehicle player unitTurret player, false];
```