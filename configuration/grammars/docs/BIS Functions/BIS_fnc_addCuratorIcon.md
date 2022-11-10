Add an icon displayed in curator interface.


---
*Syntaxes:*

[object, iconParams, map, 3D] call `BIS_fnc_addCuratorIcon`

---
*Example 1:*

```sqf
[ curatorModule, ["targetIcon.paa", [1,1,1,1], position player, 1, 1, 45, "Target", 1, 0.05, "TahomaB"], false ] call BIS_fnc_addCuratorIcon;
```