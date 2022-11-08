#### Description:
Returns a KISKA bases' hashmap data and initializes it did not exist.

#### Parameters:
0: **_baseConfig** *(CONFIG)* - The config path of the base config

#### Returns:
<HASHMAP> - a hashmap containing data about the base:
        "unit list": <ARRAY of OBJECTs> - All spawned units (includes turret units)
        "group list": <ARRAY of GROUPs> - All spawned groups (does NOT include turret units)
        "turret gunners": <ARRAY of OBJECTs> - All turret units
        "infantry units": <ARRAY of OBJECTs> - All infantry spawned units
        "infantry groups": <ARRAY of GROUPs> - All infantry spawned groups
        "patrol units": <ARRAY of OBJECTs> - All patrol spawned units
        "patrol groups": <ARRAY of GROUPs> - All patrol spawned groups
        "land vehicles": <ARRAY of OBJECTs> - All land spawned vehicles
        "land vehicle groups": <ARRAY of GROUPs> - All land vehicle crew groups
        "agent list": <ARRAY of OBJECTs> - All spawned agents

#### Examples:
```sqf
[
    "SomeBaseConfig"
] call KISKA_fnc_bases_getHashmap;
```

