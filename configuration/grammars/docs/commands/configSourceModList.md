Returns an array of mods (CfgMods) in which the given config class is defined.


---
*Syntaxes:*

`configSourceModList` config

---
*Example 1:*

```sqf
_mods = configSourceModList (configFile >> "CfgVehicles" >> "Man");
hint str _mods; // ["A3","curator","heli"]
```