#### Description:
Deletes the old respawn marker and makes a new one.

#### Parameters:
0: **_caller** *(OBJECT)* - The person calling the respawn update action

1: **_marker** *(MARKER)* - The old marker to delete

2: **_markerText** *(STRING)* - The text of the new marker

#### Returns:
NOTHING

#### Examples:
```sqf
[player,myMarker,myMarkerText] call KISKA_fnc_updateRespawnMarker;
```

