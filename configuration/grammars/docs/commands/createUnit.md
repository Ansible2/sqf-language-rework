Create a unit of the provided `CfgVehicles` class.


---
*Example 1:*
```sqf
_unit = group player createUnit ["B_RangeMaster_F", position player, [], 0, "FORM"];
```

*Example 2:*
```sqf
"B_RangeMaster_F" createUnit [position player, group player];
```

*Example 3:*
```sqf
"B_RangeMaster_F" createUnit [getMarkerPos "barracks", _groupAlpha];
```

*Example 4:*
```sqf
"B_RangeMaster_F" createUnit [
	getMarkerPos "marker_1",
	_groupAlpha,
	"loon1 = this; this addWeapon 'BAF_L85A2_RIS_SUSAT'",
	0.6,
	"corporal"
];
```

*Example 5:*
<!-- referenced in parameters (p6) -->

```sqf
_veh = "O_Quadbike_01_F" createVehicle (player getRelPos [10, 0]);
_grp = createVehicleCrew _veh;
_unit = _grp createUnit [typeOf driver _veh, _grp, [], 0, "CARGO"];
```

*Example 6:*
<!-- referenced in the description -->Creating a unit from a different side may lead to issues:

```sqf
_grp = createGroup east;
hint str side _grp; // EAST
_ap = _grp createUnit [ "C_man_p_beggar_F", position player, [], 0, "FORM"];
hint str side _ap; // CIV, not EAST

// workaround
[_ap] joinSilent _grp;
hint str side _ap; // EAST
```

*Example 7:*
<!-- referenced in alternative result (r2) -->
Reference the created unit through a global variable:

```sqf
_myUnit = "B_RangeMaster_F" createUnit [position player, group player];		// wrong - this syntax does not return a reference

"B_RangeMaster_F" createUnit [position player, group player, "myUnit = this"];	// correct - the unit is myUnit
```