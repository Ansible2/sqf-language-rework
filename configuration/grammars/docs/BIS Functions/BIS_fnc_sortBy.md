Sorts an array according to given algorithm. See `sort` for simple sorts.


---
*Syntaxes:*

[array, parameters, algorithm, direction, filter] call `BIS_fnc_sortBy`

---
*Example 1:*

```sqf
// sort numbers from lowest to highest
_sortedNumbers = [[1,-80,0,480,15,-40], [], {_x}, "ASCEND"] call BIS_fnc_sortBy;
```

*Example 2:*

```sqf
// sort helicopters by distance from player
_closestHelicopters = [[_heli1,_heli2,_heli3], [], { player distance _x }, "ASCEND"] call BIS_fnc_sortBy;
```

*Example 3:*

```sqf
// sort enemy by distance from friendly unit (referenced by local variable), the furthest first
_furtherstEnemy = [[_enemy1,_enemy2,_enemy3], [_friendly], { _input0 distance _x }, "DESCEND", { canMove _x }] call BIS_fnc_sortBy;
```