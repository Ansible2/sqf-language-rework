#### Description:
Checks if an array index satisfies the provided code, and returns a BOOL for whether or not one was found.

#### Parameters:
0: **_array** : *(ARRAY)* - The array to check

1: **_codeToCheck** : *(CODE)* - The code to check against the array indexes.Needs to return a BOOl.Params are passed within _thisArgs.

2: **_thisArgs** : *(ARRAY)* - Any local arguements that can be passed

#### Returns:
*(BOOL)* - True if an index meets the condition, false if not

#### Examples:
```sqf
// returns true if any player is alive
[allPlayers,{alive _x}] call KISKA_fnc_findIfBool;
```

