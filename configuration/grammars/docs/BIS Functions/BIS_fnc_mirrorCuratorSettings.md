Mirrors settings from one curator to another.


---
*Syntaxes:*

[from, to, modes, shareType] call `BIS_fnc_mirrorCuratorSettings`

---
*Example 1:*

```sqf
[
	[curator_1, curator_2], 
	[curator_3, curator_4], 
	["addons", "objects", "coefs"] 
] call BIS_fnc_mirrorCuratorSettings;
```