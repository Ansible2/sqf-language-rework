Explores parent classes in the run-time config for the value of a config entry.


---
*Syntaxes:*

[config,attribute,defaultValue] call `BIS_fnc_returnConfigEntry`

---
*Example 1:*

```sqf
[configfile >> "Cfg3DEN" >> "Attributes" >> "ActivationType","idc"] call BIS_fnc_returnConfigEntry;
```