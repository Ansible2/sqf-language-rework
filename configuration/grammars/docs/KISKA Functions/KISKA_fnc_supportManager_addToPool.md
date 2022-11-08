#### Description:
Adds an entry into the local support manager pool.

#### Parameters:
0: **_entryToAdd** *(STRING or ARRAY)* - The support class or [support class,uses left]

1: **_bypassChecks** *(BOOL)* - Decides whether or not to perform checks on _entryToAdd for errors

#### Returns:
NOTHING

#### Examples:
```sqf
["someClass"] call KISKA_fnc_supportManager_addToPool;
```

