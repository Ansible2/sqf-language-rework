Lock the gunner position of the vehicle turret.
This command will remove user "get in" action (not "get out") but will also stop player getting into vehicle via script commands unlike `lock` command.


---
*Syntaxes:*

vehicle `lockTurret` [turretPath, lock]

---
*Example 1:*

```sqf
vehicleName lockTurret [[0,0], true];
```

*Example 2:*

```sqf
vehicle player lockTurret [[0], true];
```