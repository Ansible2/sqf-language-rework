Executes a code when one of the specified objects is looked at (player's cursor pointed towards it) for enough time


---
*Syntaxes:*

[initialize, lookAtData] call `BIS_fnc_lookAtArray`

---
*Example 1:*

```sqf
private _lookAtArray = 
[
	[
		BIS_apc,										// name of object
		2,												// time we have to look at it
		false,											// do we destroy the entry after we looked at it
		{ ["What a wonderful APC"] call BIS_fnc_log; }	// code
	],
	[
		BIS_otherUnit, 
		2,
		false,
		{ ["apc looked at"] call BIS_fnc_log; }
	]
];
[true, _lookAtArray] spawn "BIS_fnc_lookAtArray";
sleep 15;
[false] spawn "BIS_fnc_lookAtArray";
```