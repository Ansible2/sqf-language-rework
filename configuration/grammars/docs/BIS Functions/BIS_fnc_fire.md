Makes a unit or a vehicle fire given muzzle. Make sure that there is some ammo to fire, and, in case of a unit, the weapon with given muzzle is already selected. It can be used to fire pretty much any muzzle on unit or vehicle from anywhere. Available weapons could usually be found with `weapons`, `weaponsTurret` and `allTurrets` commands.


---
*Syntaxes:*

[entity, muzzle, turret] call `BIS_fnc_fire`

---
*Example 1:*

```sqf
marshall = "B_APC_Wheeled_01_cannon_F" createVehicle position player;
createVehicleCrew marshall;

[marshall, "HE"] call BIS_fnc_fire; // fires HE muzzle of the main cannon
[marshall, "AP"] call BIS_fnc_fire; // fires AP muzzle of the main cannon
[marshall, "autocannon_40mm_CTWS"] call BIS_fnc_fire; // fires HE muzzle, because it is default
[marshall, "LMG_M200_body"] call BIS_fnc_fire; // fires machine gun
[marshall, "SmokeLauncher"] call BIS_fnc_fire; // fires smoke launcher
[marshall, "TruckHorn"] call BIS_fnc_fire; // beeps the horn
```

*Example 2:*

```sqf
[bob, "SmokeShellMuzzle"] call BIS_fnc_fire;  // bob throws smoke grenade, if he has one
[bob, "HandGrenadeMuzzle"] call BIS_fnc_fire; // bob throws hand grenade, if he has one
```

*Example 3:*

```sqf
blackfoot = "B_Heli_Attack_01_dynamicLoadout_F" createVehicle position player;
createVehicleCrew blackfoot;

[blackfoot, "missiles_DAGR"]   call BIS_fnc_fire; // fires missiles
[blackfoot, "missiles_ASRAAM"] call BIS_fnc_fire; // fires missiles
[blackfoot, "gatling_20mm"]    call BIS_fnc_fire; // fires machine gun
[blackfoot, "CMFlareLauncher"] call BIS_fnc_fire; // fires chaff
```

*Example 4:*

```sqf
[vehicle mortargunner, "mortar_82mm"] call BIS_fnc_fire; // mortargunner fires mortar
```