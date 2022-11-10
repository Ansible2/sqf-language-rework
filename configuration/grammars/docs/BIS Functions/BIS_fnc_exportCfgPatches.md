Export list of addons for Community Wiki - `:Category:Arma 3: Assets|Arma 3: Assets`.


---
*Syntaxes:*

[config, classes] call `BIS_fnc_exportCfgPatches`

---
*Example 1:*

```sqf
call BIS_fnc_exportCfgPatches;
```

*Example 2:*

export `Arma 3: CfgPatches CfgVehicles]] and [[Arma 3: CfgPatches CfgWeapons`:

```sqf
["CfgVehicles"] call BIS_fnc_exportCfgPatches;	// Arma 3: CfgPatches CfgVehicles
["CfgWeapons"]  call BIS_fnc_exportCfgPatches;	// Arma 3: CfgPatches CfgWeapons
```