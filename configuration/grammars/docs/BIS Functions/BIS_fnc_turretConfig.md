Returns vehicle turret config for the turret given by the turret path.


---
*Syntaxes:*

[vehicle, turret] call `BIS_fnc_turretConfig`

---
*Example 1:*

```sqf
getNumber (["B_APC_Wheeled_01_cannon_F", [0,0]] call BIS_fnc_turretConfig >> "hasGunner") > 0;
```

*Example 2:*

```sqf
getNumber ([car1, [-1]] call BIS_fnc_turretConfig >> "hasDriver") > 0;
```