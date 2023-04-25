#### Description:
Returns the CBA statemachine used to control convoy movement and speed.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap get the statemachine from

#### Returns:
*(LOCATION)* - The CBA statemachine

#### Examples:
```sqf
private _convoyStatemachine = [
    SomeConvoyHashMap
] call KISKA_fnc_convoy_getConvoyStatemachine;
```

