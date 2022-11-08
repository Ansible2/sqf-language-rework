#### Description:
Stops a unit's use of KISKA_fnc_ambientAnim and returns them to the state they were in before it ran.

#### Parameters:
0: **_unit** *(OBJECT)* - The unit who is running KISKA ambient anims

1: **_triggeredByDeletion** *(BOOL)* - If this stop was initiated by the delete
    Eventhandler

#### Returns:
NOTHING

#### Examples:
```sqf
[someUnit] call KISKA_fnc_ambientAnim_stop;
```

