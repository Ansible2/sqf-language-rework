#### Description:
Returns vectorDir and vectorUp that should angle the object towards the target. E.g. this will point the nose of a plane towards a target if paired with setVector commands.

#### Parameters:
0: **_object** : *(OBJECT, ARRAY)* - The object to set the vectors of or its ASL position

1: **_target** : *(OBJECT, ARRAY)* - The target to angle towards or its ASL position

#### Returns:
<ARRAY> - An array of arrays formatted as [directionVector,upVector]

#### Examples:
```sqf
// angles to player
myObject setVectorDirAndUp ([myObject,player] call KISKA_fnc_getVectorToTarget);
```

