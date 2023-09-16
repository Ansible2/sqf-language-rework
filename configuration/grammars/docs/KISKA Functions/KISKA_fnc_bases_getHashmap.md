#### Description:
Returns a KISKA bases' hashmap spawn data or initializes if it did not exist.

#### Parameters:
0: **_baseConfig** *(CONFIG or STRING)* - The config path of the base config

#### Returns:
*(HASHMAP)* - a hashmap containing data about the base:
    "unit list": *(OBJECT[])* - All spawned units (includes turret units)
    "group list": *(GROUP[])* - All spawned groups (does NOT include turret units)
    "turret gunners": *(OBJECT[])* - All turret units
    "infantry units": *(OBJECT[])* - All infantry spawned units
    "infantry groups": *(GROUP[])* - All infantry spawned groups
    "patrol units": *(OBJECT[])* - All patrol spawned units
    "patrol groups": *(GROUP[])* - All patrol spawned groups
    "land vehicles": *(OBJECT[])* - All land spawned vehicles
    "land vehicle groups": *(GROUP[])* - All land vehicle crew groups
    "agent list": *(OBJECT[])* - All spawned agents

#### Examples:
```sqf
private _mapOfDataForSpecificBase = [
    "SomeBaseConfig"
] call KISKA_fnc_bases_getHashmap;
```

