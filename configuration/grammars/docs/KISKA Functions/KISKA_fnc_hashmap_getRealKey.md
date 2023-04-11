#### Description:
Returns the actual value used for a key when using KISKA hashmap functions. This really only applies to objects or groups as they will have a special string used to identify them in the hashmap. Use this function to get the key of them if you need to do multiple operations on a hashmap with the same object or group and do not want the overhead of the functions.

#### Parameters:
0: **_key** *(ANY)* - The key used with KISKA hashmap functions (such as object or group)

#### Returns:
*(ANY)* - Whatever the key will be in a hashmap

#### Examples:
```sqf
private _keyUsedInKiskaHashmap = [someObject] call KISKA_fnc_hashmap_getRealKey;
```

