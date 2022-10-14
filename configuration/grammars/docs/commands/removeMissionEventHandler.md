Removes mission event handler added by `addMissionEventHandler`.


---
*Syntaxes:*

`removeMissionEventHandler` [type, index]

---
*Example 1:*

```sqf
private _eventHandlerId = addMissionEventHandler ["Ended", { diag_log "mission complete"; }];
// ...
removeMissionEventHandler ["Ended", _eventHandlerId];
```

*Example 2:*

```sqf
for "_i" from 0 to 4 do {
	missionNamespace setVariable [format ["handler%1",_i], addMissionEventHandler ["Loaded","hint ""_i"";"]];
};
removeMissionEventHandler ["Loaded", handler2]; // Remove the third index under type "Loaded"
```