#### Description:
Acts as the default event for the reactive bases when a group calls for reinforcements.

#### Parameters:
0: **_group** *(GROUP)* - The group the event is triggering for

1: **_combatBehaviour** *(STRING)* - The group's current behviour

2: **_eventConfig** *(CONFIG)* - The eventhandler config (OPTIONAL)

#### Returns:
NOTHING

#### Examples:
```sqf
[
    someGroup,
    "combat"
] call KISKA_fnc_bases_triggerReaction
```

