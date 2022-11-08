#### Description:
Checks if a key exists in a hashmap, supports objects and groups as keys. Ideally, not something that should be used if the map is not intended to also hold groups and objects as keys.

#### Parameters:
0: **_map** *(HASHMAP)* - The map to search in

1: **_key** *(ANY)* - The key to find

#### Returns:
*(BOOL)* - True if the key is found, false if not

#### Examples:
```sqf
[myMap,_key] call KISKA_fnc_hashmap_in;
```

