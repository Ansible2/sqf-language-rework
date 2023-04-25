#### Description:
Returns the list of vehicles in a convoy. This is not a copy of the array used for certain internal operations of the convoy. Make a copy if you intend to modify the contents of the array (see example 2).

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap get vehicles from

1: **_fromIndex** *(NUMBER)* - If provided, only the vehicles from (and including) thethe given index will be returned

#### Returns:
*(OBJECT[])* - an array containing each vehicle (in there convoy order)

#### Examples:
```sqf
private _convoyVehicles = [
    SomeConvoyHashMap
] call KISKA_fnc_convoy_getConvoyVehicles;
```
```sqf
private _convoyVehiclesCopy = +([
    SomeConvoyHashMap
] call KISKA_fnc_convoy_getConvoyVehicles);
```
```sqf
private _startingIndex = 1;
private _allVehiclesButLeader = [
    SomeConvoyHashMap,
    _startingIndex
] call KISKA_fnc_convoy_getConvoyVehicles;
```

