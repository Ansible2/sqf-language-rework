Set the `Structured Text` which will be displayed in [[DialogControls-Text#CT_STRUCTURED_TEXT.3D13|structured text control]].


---
*Example 1:*
```sqf
_control ctrlSetStructuredText parseText "First line<img image=data\isniper.paa /><br />Second line"
```

*Example 2:*
To adjust text vertically, add extra line above with blank space (&amp;#160;) and set its size accordingly:

```sqf
with uiNamespace do {
	button = findDisplay 46 ctrlCreate ["RscShortcutButton", -1];
	button ctrlSetPosition [0,0,0.3,0.1];
	button ctrlCommit 0;
	button ctrlSetStructuredText parseText 
	"<t size='0.5'>&#160;</t><br/><t size='1' align='center'>Button Text&#160;&#160;</t>";
};
```

*Example 3:*
There is a bug with **valign** that requires adding 1 extra trailing space per line to the displayed text in order to keep it centered horizontally:

```sqf
disableSerialization;
private _ctrl = findDisplay 46 ctrlCreate ["RscStructuredText", -1];
_ctrl ctrlSetPosition [0, 0, 0.5, 0.5];
_ctrl ctrlSetBackgroundColor [0, 0, 0, 1];
_ctrl ctrlCommit 0;
private _lineHeight = getNumber (configFile >> "RscStructuredText" >> "size");
private _linesTotal = (ctrlPosition _ctrl select 2) / _lineHeight;
private _trailingSpace = "";
for "_i" from 1 to _linesTotal do { _trailingSpace = _trailingSpace + " " };
_ctrl ctrlSetStructuredText parseText format ["<t size='%1'><t size='1' align='center' valign='middle'>%2%3</t> </t>", _linesTotal, "------ Centered Text ------", _trailingSpace];
```