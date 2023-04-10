#### Description:
Acts as the default event for the reactive bases when a group calls for reinforcements.

#### Parameters:
0: **_group** *(GROUP)* - The group the event is triggering for

1: **_detectedTarget** *(OBJECT)* - The enemy unit that was detected

#### Returns:
NOTHING

#### Examples:
```sqf
[
    someGroup,
    anEnemyUnit
] call KISKA_fnc_bases_triggerReaction
```

