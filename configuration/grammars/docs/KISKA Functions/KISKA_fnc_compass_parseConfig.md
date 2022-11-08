#### Description:
Returns an array formatted for CBA settings menu lists.

#### Parameters:
0: **_config** *(CONFIG)* - The config to parse

1: **_varName** *(STRING)* - uiNamespace variable to save to and to check

#### Returns:
*(ARRAY)* - An array formatted as [[title name strings],[image path strings],0]

#### Examples:
```sqf
private _array = [
    configFile >> "KISKA_compass" >> "compass",
    "KISKA_compass_configs"
] call KISKA_fnc_compass_parseConfig;
```

