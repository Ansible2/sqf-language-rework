#### Description:
Searches a config class for an array that matches the units classname. This array is filled with potential loadout arrays for the unit.

#### Parameters:
0: **_config** *(CONFIG)* - The config to search for the array of loadouts in

1: **_units** *(ARRAY, GROUP, or OBJECT)* - The unit(s) to apply the function to

#### Returns:
NOTHING

#### Examples:
```sqf
[
    missionConfigFile >> "KISKA_loadouts" >> ONL,
    unit1
] call KISKA_fnc_assignUnitLoadout
```

