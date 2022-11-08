#### Description:
Sets a key/value pair in a hashmap but also supports objects and groups as keys. Ideally, not something that should be used if the map is not intended to also hold groups and objects as keys.

#### Parameters:
0: **_map** *(HASHMAP)* - The map to insert in to

1: **_key** *(ANY)* - The key to associate with the value

2: **_value** *(ANY)* - The value to associate witht the key

3: **_insertOnly** *(BOOL)* - Can set overwrite an existing key

#### Returns:
*(BOOL)* - False if key is new, true if overwriting

#### Examples:
```sqf
private _inserted = [
    myMap,
    someObject,
    "Hello World"
] call KISKA_fnc_hashmap_set;
```

