#### Description:
Sets the default seperation between NEWLY added vehicles to a convoy. This will NOT update the spacing between any vehicles currently in the convoy.

#### Parameters:
0: **_convoyHashMap** *(HASHMAP)* - The convoy hashmap to set the value in

1: **_seperation** *(NUMBER)* - The default distance between vehicles

#### Returns:
NOTHING

#### Examples:
```sqf
[_convoyHashMap,20] call KISKA_fnc_convoy_setDefaultSeperation;
```

