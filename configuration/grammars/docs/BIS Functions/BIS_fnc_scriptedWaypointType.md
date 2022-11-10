Return CfgWaypoints type of scripted waypoint.
	Returns empty string/config when waypoint is not scripted
	Returns "Custom"/CfgWaypoints root when waypoint is using custom script.


---
*Syntaxes:*

[waypoint,type] call `BIS_fnc_scriptedWaypointType`

---
*Example 1:*

```sqf
[BIS_scripted_WP_01,"returnString"] call BIS_fnc_scriptedWaypointType;
```