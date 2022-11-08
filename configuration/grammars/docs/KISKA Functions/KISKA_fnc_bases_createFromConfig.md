#### Description:
Spawns a configed KISKA base.

#### Parameters:
0: **_baseConfig** *(STRING or CONFIG)* - The config path of the base config or if
    in missionConfigFile >> "KISKA_bases" config, its class

#### Returns:
<HASHMAP> - see KISKA_fnc_bases_getHashmap

#### Examples:
```sqf
private _baseMap = ["SomeBaseConfig"] call KISKA_fnc_bases_createFromConfig;
```

