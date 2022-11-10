Copies `CfgVehicles` information to clipboard in wiki format.


---
*Syntaxes:*

[side, category] call `BIS_fnc_exportCfgVehiclesAssetDB`

---
*Example 1:*

```sqf
[0]   spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles EAST
[1]   spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles WEST
[2]   spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles GUER
[3,0] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles CIV
[3,1] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles Structures
[3,2] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles Ruins & Wrecks
[3,3] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles Equipment
[3,4] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles EMPTY
[3,5] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles VR Objects
[3,6] spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles Animals
[]    spawn BIS_fnc_exportCfgVehiclesAssetDB;	// exports Arma 3 CfgVehicles Other:
												// Unknown, Enemy, Friendly, Modules, Empty, Ambient Life
```
See:
{{Columns|4|
* `Arma 3 CfgVehicles EAST`
* `Arma 3 CfgVehicles WEST`
* `Arma 3 CfgVehicles GUER`
* `Arma 3 CfgVehicles CIV`
* `Arma 3 CfgVehicles Structures`
* `Arma 3 CfgVehicles Ruins & Wrecks`
* `Arma 3 CfgVehicles Equipment`
* `Arma 3 CfgVehicles EMPTY`
* `Arma 3 CfgVehicles VR Objects`
* `Arma 3 CfgVehicles Animals`
* `Arma 3 CfgVehicles Other`
}}