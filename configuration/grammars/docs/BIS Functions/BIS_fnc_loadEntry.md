Searches for config entry in mission, campaign and then in global config file.


---
*Syntaxes:*

[path,defaultConfig] call `BIS_fnc_loadEntry`

---
*Example 1:*

```sqf
[ ["CfgWeapons","hgun_Rook40_snds_F","bullet3"], configfile >> "CfgWeapons" >> "hgun_Rook40_snds_F" >> "baseWeapon" ] call BIS_fnc_loadEntry;
```