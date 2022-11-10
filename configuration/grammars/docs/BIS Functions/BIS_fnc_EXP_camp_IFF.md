Simple handling of the Support Team's scripted IFF.


---
*Syntaxes:*

[units] call `BIS_fnc_EXP_camp_IFF`

---
*Example 1:*

```sqf
[units group player] call BIS_fnc_EXP_camp_IFF;
```

*Example 2:*

```sqf
individualUnit setVariable ["BIS_iconAlways", true];	// to always show the icon and name of a unit
individualUnit setVariable ["BIS_iconShow", false];		// to hide the icon
individualUnit setVariable ["BIS_iconName", false];		// to hide the name
```