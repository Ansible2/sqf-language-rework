#### Description:
Rewrite of BIS_fnc_stalk for optimizations and features. One provided group will continually be provided waypoints to another group's positions providing a "stalking" affect.

#### Parameters:
0: **_stalkerGroup** *(GROUP or OBJECT)* - The group to do the stalking

1: **_stalked** *(GROUP or OBJECT)* - The group or unit to be stalked, if group is used, the leader will be stalked until every unit in the group is dead

2: **_refreshInterval** *(NUMBER)* - How often the _stalkerGroup will have their waypointupdated with the position of the _stalkedGroup, and how often to check the _conditionToEndStalking

3: **_postStalking** *(STRING, ARRAY, or CODE)* - Code that after stalking is completewill be executed. (See KISKA_fnc_callBack _callBackFunction parameter)

4: **_conditionToEndStalking** *(STRING, ARRAY, or CODE)* - Code that (if returns true)can end the stalking. (See KISKA_fnc_callBack _callBackFunction parameter).The stalking will automatically end if all units in one or both groups endup dead.

#### Returns:
NOTHING

#### Examples:
```sqf
[
    someGroup,
    group player,
    15,
    {hint str _this},
    {false}
] spawn KISKA_fnc_stalk
```

