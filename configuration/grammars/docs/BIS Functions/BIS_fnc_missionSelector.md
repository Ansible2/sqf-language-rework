Function that draws clickable, hoverable and animated icons on the map that execute a user-defined code when pressed.


---
*Syntaxes:*

[area, mapCenter, missionsArray] call `BIS_fnc_missionSelector`

---
*Example 1:*

```sqf
private _area = [750, 400];
private _missionsList =
[
	[
		getMarkerPos "BIS_briefMarkerINFANTRY",
		"Infantry",
		"Your mission is to do stuff",
		"AnimBriefing\intro_stage1a_CA.paa",
		{ hint "infantry mission selected" }
	],
	[
		getMarkerPos "BIS_briefMarkerSPECIALFORCES",
		"Special Forces",
		"Your mission is to do stuff but in a more special way",
		"AnimBriefing\intro_stage1a_CA.paa",
		{ hint "special forces mission selected" }
	]
];

private _index = [_area, getMarkerPos "BIS_cameraCenter", _missionsList] call BIS_fnc_missionSelector;
private _missionDetails = _missionsList select _index;
```