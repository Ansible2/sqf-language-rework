Adds a multiplayer event handler (EH) to the given object and returns EH handle.


---
*Example 1:*
```sqf
_index = player addMPEventHandler ["MPKilled", { _this execVM "playerKilled.sqf"; }];
```