#### Description:
Stages an action added with KISKA_fnc_addProximityPlayerAction for removal. This happens within the loop logic of KISKA_fnc_addProximityPlayerAction so it is NOT instant.

#### Parameters:
0: **_id** : *(NUMBER)* - The proximity action id returned from KISKA_fnc_addProximityPlayerAction

#### Returns:
*(BOOL)* - False if action still exists, true if it does not

#### Examples:
```sqf
[0] call KISKA_fnc_removeProximityPlayerAction;
```

