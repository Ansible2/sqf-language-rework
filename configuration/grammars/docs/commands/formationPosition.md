Return position of unit in the formation.


---
*Syntaxes:*

`formationPosition` unit

---
*Example 1:*

```sqf
_pos = formationPosition _unit;
```

*Example 2:*

```sqf
// Reposition entire group to a new position (ground level)
private _group = group player;
private _leader = leader _group;

// Set the leader to the spawn position
_leader setPosATL markerPos "spawn_position";

// Reposition all units of the group except the leader
{
	private _formationPos = formationPosition _x;
	_formationPos set [2, 0];
	_x setPosATL _formationPos;
} forEach (units _group - [_leader]);
```