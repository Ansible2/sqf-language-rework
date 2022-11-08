#### Description:
Deletes a key/value pair if it's in a hashmap, supports objects and groups as keys. Ideally, not something that should be used if the map is not intended to also hold groups and objects as keys.

#### Parameters:
0: **_map** *(HASHMAP)* - The map to search in

1: **_key** *(ANY)* - The key to delete

#### Returns:
<ANY> - The deleted value, nil if not found

#### Examples:
```sqf
private _value = [myMap,_key] call KISKA_fnc_hashmap_deleteAt;
```

