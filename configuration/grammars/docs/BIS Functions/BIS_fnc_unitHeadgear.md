Randomise headgear and facewear of a character.


---
*Syntaxes:*

[unit, headgear, facewear] call `BIS_fnc_unitHeadgear`

---
*Example 1:*

```sqf
[this] call BIS_fnc_unitHeadgear;					// headgear and face wear, same as [this, [], []]
[this, [], []] call BIS_fnc_unitHeadgear;			// headgear only
[this, nil, []] call BIS_fnc_unitHeadgear;			// facewear only
[this, "myTemplate"] call BIS_fnc_unitHeadgear;	// class defined in Description.ext - CfgUnitTemplates
```