`execVM` desired script with desired argument(s). This function is only really useful when combined with `BIS_fnc_MP` to execute a script remotely.


---
*Syntaxes:*

filename call `BIS_fnc_execVM`

[argument(s), filename] call `BIS_fnc_execVM`

---
*Example 1:*

```sqf
"Bonus\initializeExtras.sqf" call BIS_fnc_execVM;
```

*Example 2:*

```sqf
[player,"reposition.sqf"] call BIS_fnc_execVM;
```

*Example 3:*

```sqf
// before Arma 3 v1.50
[[[_param1, _param2], "addBonus.sqf"], "BIS_fnc_execVM", true] call BIS_fnc_MP;

// since Arma 3 v1.50
[[_param1, _param2], "addBonus.sqf"] remoteExec ["execVM"];
```