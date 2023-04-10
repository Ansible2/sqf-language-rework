#### Description:
Parses and initializes a KISKA base entry's ambient animation class. This is meant to be called from KISKA bases createFromConfig functions.

#### Parameters:
0: **_configToInit** *(CONFIG)* - The config path to the entry's that has an ambientAnim class

1: **_units** *(OBJECT[] or OBJECT)* - The units that are under the config to init

#### Returns:
NOTHING

#### Examples:
```sqf
[
    missionConfigFile >> "SomeBaseConfig" >> "infantry >> "someInfantryConfigClass",
    someUnit
] call KISKA_fnc_bases_initAmbientAnimFromClass;
```

