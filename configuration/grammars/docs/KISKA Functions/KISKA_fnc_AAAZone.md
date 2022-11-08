#### Description:
Sets up a zone that when entered by an enemy aircraft, the provided vehicle will engage. Otherwise, vehicle will stay the same.

#### Parameters:
0: **_vehicle** : *(OBJECT)* - The AAA piece

1: **_radius** : *(NUMBER)* - How far out the turret is alerted to

2: **_checkTime** : *(NUMBER)* - How often does the AAA scan the area for targets

#### Returns:
NOTHING

#### Examples:
```sqf
[myVehicle] spawn KISKA_fnc_AAAZone;
```

