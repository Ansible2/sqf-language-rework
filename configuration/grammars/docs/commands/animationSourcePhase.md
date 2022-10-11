Returns current animation phase of given source. Similar to `animationPhase` or `doorPhase` but designed to complement `animateSource`. This command could be used to obtain relative turret direction and gun elevation on a vehicle (see {{HashLink|#Example 2}}).


---
*Example 1:*
```sqf
private _phase = house animationSourcePhase "Door_1_source";
```

*Example 2:*
```sqf
private _mainturretDirection =	deg (_marshall animationSourcePhase "mainturret"); // relative to Marshall direction
private _maingunElevation =		deg (_marshall animationSourcePhase "maingun");
private _obsturretDirection =	deg (_marshall animationSourcePhase "obsturret"); // relative to main turret direction
private _obsgunElevation =		deg (_marshall animationSourcePhase "obsgun");
```