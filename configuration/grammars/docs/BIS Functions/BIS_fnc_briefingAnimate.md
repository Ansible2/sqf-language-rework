Animate briefing markers.


---
*Syntaxes:*

[markerName, stepId, delay] call `BIS_fnc_briefingAnimate`

---
*Example 1:*

```sqf
// given you have 6 markers:
// - "myMarker"
// - "myMarker_0"
// - "myMarker_1"
// - "myMarker_2"
// - "myMarker_3"
// - "myMarker_4"
for "_i" from 0 to 4 do {
	private _commit = 1;
	["myMarker", 5, _commit] call BIS_fnc_briefingAnimate;
	sleep _commit;
};
```