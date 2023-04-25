#### Description:
Gets the default seperation between NEWLY added vehicles to a convoy. This is the seperation that vehicles will get by default when they are added to the convoy.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to get the value from

#### Returns:
*(NUMBER)* - The default sepration between newly added convoy vehicles

#### Examples:
```sqf
private _defaultSeperation = [
    _convoyHashMap
] call KISKA_fnc_convoy_getDefaultSeperation;
```

