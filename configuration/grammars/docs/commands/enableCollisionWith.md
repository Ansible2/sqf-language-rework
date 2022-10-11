Cancels the effects of `disableCollisionWith`. The collision is always enabled for both objects in the arguments, i.e. vehicle1 with vehicle2 and vehicle2 with vehicle1


---
*Example 1:*
```sqf
[_veh1, _veh2] remoteExecCall ["enableCollisionWith", 0, _veh1];
```