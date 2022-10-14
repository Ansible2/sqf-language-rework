Returns array of available turret paths from vehicle object.


---
*Syntaxes:*

`allTurrets` vehicle

`allTurrets` [vehicle, includeFFV]

---
*Example 1:*

```sqf
_turretPaths = allTurrets _mySlammerUP;				// [[0],[0,0]]
_turretPaths = allTurrets [_mySlammerUP, true];		// [[0],[0,0]] <- Commander turret is also an FFV turret
_turretPaths = allTurrets [_mySlammerUP, false];	// [[0]]
```

*Example 2:*

Return FFV turrets only:

```sqf
_FFVTurrets = allTurrets [tank, true] - allTurrets [tank, false];
```