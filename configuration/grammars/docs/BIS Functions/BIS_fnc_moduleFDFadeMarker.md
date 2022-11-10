Gradually change the alpha of the given marker.


---
*Syntaxes:*

[markerName, alpha] spawn `BIS_fnc_moduleFDFadeMarker`

---
*Example 1:*

```sqf
["tankMarker", 0.25] spawn BIS_fnc_moduleFDFadeMarker;
```

*Example 2:*

Creates a pulsating marker:

```sqf
[] spawn 
{
	while { alive enemyTank } do
	{
		["tankMarker", 1] call BIS_fnc_moduleFDFadeMarker;
		["tankMarker", 0] call BIS_fnc_moduleFDFadeMarker;
		sleep 0.05;
	};
	["tankMarker", 0] call BIS_fnc_moduleFDFadeMarker;
};
```