#### Description:
Parses a reinforce class that is used in a unit's KIKSA bases class, and initializes the group(s) reactivity to it.

#### Parameters:
0: **_group** *(GROUP, GROUP[])* - The config path of the base config

1: **_config** *(CONFIG)* - The config path of the base config

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _group,
    SomeBaseConfig >> "infantry" >> "someUnitClass"
] call KISKA_fnc_bases_initReinforceFromClass;
```
