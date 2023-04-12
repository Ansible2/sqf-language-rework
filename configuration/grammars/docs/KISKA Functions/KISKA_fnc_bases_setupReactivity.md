#### Description:
Spawns a configed KISKA base.

#### Parameters:
0: **_group** *(GROUP)* - The group to add setup reactions for

1: **_reinforceId** *(NUMBER or STRING)* - A globally unqiue identifier for this group (or a collection of groups)

2: **_canCallIds** *(STRING[])* - An array of _reinforceIds denoting groups that will respond todistress calls from this group

3: **_priority** *(NUMBER)* - a number signifying how important this group's call will be(if a group is responding to another call, they will break away from it for this call if higher)

4: **_onEnemyDetected** *(CODE or STRING)* - Code that will be executed when the group enters combat.Must return a boolean that denotes whether to execute default functionality that happenswith the event (see KISKA_fnc_bases_triggerReaction).
    Parameters:
    - 0: *(GROUP)* - The group the event is triggering for
    - 1: *(OBJECT)* - The enemy unit that was detected
    - 2: *(ARRAY)* - An array of GROUPs that can respond to the call (based on _canCallIds)
    - 3: *(NUMBER)* - The same _priority

#### Returns:
*(NUMBER)* - The event id of the EnemyDetected group eventhandler

#### Examples:
```sqf
[
    aGroup,
    123,
    ["anotherGroupsId"],
    1,
    {
        hint str _this;
        false // continue with default reaction behaviour
    }
] call KISKA_fnc_bases_setupReactivity;
```

