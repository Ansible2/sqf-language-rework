Align two columns divided by tabs. A tab counts for 8 characters.


---
*Syntaxes:*

array call `BIS_fnc_alignTabs`

---
*Example 1:*

```sqf
[
	["Player:", str player],
	["Name:", name player],
	["Type:", typeOf player],
	["Location:", str getPosATL player],
	["Direction:", str getDir player]
] call BIS_fnc_alignTabs;
```