Returns path to the icon texture associated with given task type.


---
*Syntaxes:*

[type, default] call `BIS_fnc_taskTypeIcon`

---
*Example 1:*

```sqf
["attack",configFile >> "CfgTaskTypes" >> "Run" >> "icon"] call BIS_fnc_taskTypeIcon;
```