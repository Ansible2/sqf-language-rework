Adds event handler attached to the current mission and returns event handler handle. For the list of available mission event handlers see: [[Arma 3: Mission Event Handlers]]


---
*Syntaxes:*

`addMissionEventHandler`  [event, expression, arguments]

---
*Example 1:*

```sqf
_id = addMissionEventHandler ["PlayerDisconnected", { systemChat str _this }];
```

*Example 2:*

```sqf
_id = addMissionEventHandler ["EachFrame", { systemChat str [_thisArgs, time] }, [time]];
```