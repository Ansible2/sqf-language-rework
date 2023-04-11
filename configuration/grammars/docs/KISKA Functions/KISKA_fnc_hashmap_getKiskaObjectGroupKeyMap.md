#### Description:
Retrieves the global hashmap used to associate a given real key with either a group or object with KISKA hashmap functions.

#### Parameters:
NONE

#### Returns:
*(HASHMAP)* - The hashmap used for finding the given object or group from
 a real key used in a KISKA hashmap

#### Examples:
```sqf
private _kiskaObjectOrGroupKeyHashMap = call KISKA_fnc_hashmap_getKiskaObjectGroupKeyMap;
```

