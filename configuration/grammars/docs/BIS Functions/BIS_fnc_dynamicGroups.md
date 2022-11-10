Function that adds dynamic groups to the mission as seen in End Game. Function needs to be initialized on server and client. Clients can then use action TeamSwitch ("U" by default) to access the Dynamic Groups interface.


---
*Syntaxes:*

[mode, params] call `BIS_fnc_dynamicGroups`

---
*Example 1:*

```sqf
["Initialize"] call BIS_fnc_dynamicGroups; // exec on Server
```

*Example 2:*

```sqf
["InitializePlayer", [player]] call BIS_fnc_dynamicGroups; // exec on client
```