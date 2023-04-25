#### Description:
Deletes an instance of a KISKA convoy. All vehicles (that aren't the lead) will halt. This can be executed at any time on a convoy.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to add to

#### Returns:
NOTHING

#### Examples:
```sqf
private _convoyHashMap = [
    [leadVehicle],
    10
] call KISKA_fnc_convoy_create;
// some time later...
[_convoyHashMap] call KISKA_fnc_convoy_delete;
```

