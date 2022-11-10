This function is a central part of how BI handles UIs. For a full explanation see `this page`.


---
*Syntaxes:*

parameters call `BIS_fnc_initDisplay`

---
*Example 1:*

```sqf
["onLoad", _this, "RscDisplayAAR", "GUI", true] call (uiNamespace getVariable "BIS_fnc_initDisplay");
```