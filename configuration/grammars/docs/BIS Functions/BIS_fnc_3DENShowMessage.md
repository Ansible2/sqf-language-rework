Shows a pop-up message.
In order to skip any optional parameter in between other parameters, send `nil` as parameter.


---
*Syntaxes:*

[text, title, buttonOK, buttonCancel, icon, parentDisplay] call `BIS_fnc_3DENShowMessage`

---
*Example 1:*

```sqf
["Message","Title of the Message"] call BIS_fnc_3DENShowMessage;
```

*Example 2:*

```sqf
[
	"Are you sure you want to delete / modify the selected variables?",
	"Delete / Modify",
	[
		"Yes",
		{ BIS_Message_Confirmed = true }
	],
	[
		"No",
		{ BIS_Message_Confirmed = false }
	],
	"\A3\ui_f\data\map\markers\handdrawn\warning_CA.paa",
	findDisplay 313
] call BIS_fnc_3DENShowMessage;
```

*Example 3:*

```sqf
// Only change the OK button's code
[
	"Are you sure you want to delete / modify the selected variables?",
	"Delete / Modify",
	[
		nil,
		{ BIS_Message_Confirmed = true }
	],
	nil,
	"\A3\ui_f\data\map\markers\handdrawn\warning_CA.paa",
	findDisplay 313
] call BIS_fnc_3DENShowMessage;
```