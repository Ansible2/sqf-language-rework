#### Description:
Reassigns a curator object to the local player.

#### Parameters:
0: **_curatorObject** : *(OBJECT or STRING)* - The curator object to reassign

1: **_isManual** : *(BOOL)* - Was this called from the diary entry (keeps hints from showing otherwise)

#### Returns:
<BOOL> - true if added to player, false otherwise

#### Examples:
```sqf
// show hint messages
[myCuratorObject,true] call KISKA_fnc_reassignCurator;
```

