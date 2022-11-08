#### Description:
Removes an index from a global array. This was used in lieu of creating a public variable to sync the array. In order to keep network traffic lower if the array becomes large.

#### Parameters:
0: **_arrayVariableName** : *(STRING)* - The global array in string format

1: **_indexToRemove** : *(ANY)* - The index to remove

2: **_namespace** : *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL,DISPLAY)* - What namespace the array is in

#### Returns:
<BOOL> - True if done, false if not

#### Examples:
```sqf
["myGlobalArrayVar",someInfoHere] call KISKA_fnc_deleteAtArray;
```

