Queries given event handler's information.


---
*Example 1:*
```sqf
private _info = player getEventHandlerInfo ["MPKilled", 1];		// object EH
```

*Example 2:*
```sqf
private _info = getEventHandlerInfo ["EachFrame", 0];				// mission EH
```

*Example 3:*
```sqf
private _info = _bullet getEventHandlerInfo ["Deflected", 0];		// projectile EH
```

*Example 4:*
```sqf
private _info = _group getEventHandlerInfo ["EnemyDetected", 1];	// group EH
```

*Example 5:*
```sqf
private _info = _control getEventHandlerInfo ["ButtonClick", 1];	// control (UI) EH
```