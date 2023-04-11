#### Description:
Adds a given vehicle to a convoy. The index returned will be a key to the _convoyHashMap that can be used to get the vehicle for that index in the convoy.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to add to

1: **_vehicle** *(OBJECT)* - The vehicle to add

2: **_insertIndex** *(NUMBER)* - The index to insert the vehicle into the convoy at. Negative value means the back.(0 is lead vehicle, 1 is vehicle directly behind leader, etc.)

3: **_convoySeperation** *(NUMBER)* - How far the vehicle should keep from the vehicle in front (min of 10)

#### Returns:
*(NUMBER)* - The index the vehicle was inserted into the convoy at

#### Examples:
```sqf
private _convoyMap = [] call KISKA_fnc_convoyAdvanced_create;
private _spotInConvoy = [
    _convoyMap,
    vic
] call KISKA_fnc_convoyAdvanced_addVehicle;
```

