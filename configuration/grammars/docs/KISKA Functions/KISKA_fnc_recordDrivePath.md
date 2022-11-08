#### Description:
Records an array of positons and speeds for use with setDriveOnPath command.

#### Parameters:
0: **_unit** *(OBJECT)* - The unit to record

1: **_frequency** *(NUMBER)* - How often to record, 0 for every frame

2: **_recordSpeed** *(BOOL)* - Should the speed of the _unit be recorded to

#### Returns:
NOTHING

#### Examples:
```sqf
[
    objectParent player,
    0.25
] call KISKA_fnc_recordDrivePath
```

