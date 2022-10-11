[[ArmA:_Mission_Editor#Synchronize_Mode_.28F5.29|Synchronizes]] the trigger with zero or more waypoints.


---
*Example 1:*
```sqf
_trigger synchronizeTrigger [];
```

*Example 2:*
```sqf
_trigger synchronizeTrigger [_waypoint1];
```

*Example 3:*
```sqf
_trigger synchronizeTrigger [_waypoint1, [_group5, 7], _waypoint3];
```