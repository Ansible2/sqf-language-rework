#### Description:
Pushes back a value to a global array. Checks if machine hasInterface before pushing. This was used in lieu of creating a public variable to sync the array. In order to keep network traffic lower if the array becomes large.

#### Parameters:
0: **_arrayVariableName** : *(STRING)* - The array in string format

1: **_entryToAdd** : *(ANY)* - The value to pushBack

2: **_namespace** : *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL, or DISPLAY)* - What namespace the array is in

#### Returns:
*(BOOL)* - true if added, false if not

#### Examples:
```sqf
[
"myGlobalArrayVar",
someInfoHere,
missionNamespace
] call KISKA_fnc_pushBackToArray_interface;
```

