#### Description:
Provides a unique hashmap key for a given object or group. The key can be reverse looked up for the object or group with KISKA_fnc_hashmap_getObjectOrGroupFromRealKey.

#### Parameters:
0: **_objectOrGroup** *(OBJECT or GROUP)* - The object or group to assign a key to

#### Returns:
*(STRING)* - The string key used to uniquely identify the given object or group

#### Examples:
```sqf
private _associatedKey = [
someObject
] call KISKA_fnc_hashmap_assignObjectOrGroupKey;
```

