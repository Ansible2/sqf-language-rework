Retrives list of given unit targets matching specified filter. If the filter is not specified, all targets are returned.


---
*Example 1:*
```sqf
private _targets = _unit targets [false, 300, [east,sideEnemy]]; // all targets of east or renegade side in 300m
```

*Example 2:*
```sqf
private _targets = _unit targets [true, 300]; // enemy targets in 300m
```

*Example 3:*
```sqf
private _targets = _unit targets []; // all targets
```