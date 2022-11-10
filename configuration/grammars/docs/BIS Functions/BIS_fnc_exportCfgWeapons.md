Export list of weapons for Community Wiki `:Category:Arma 3: Assets|Arma 3 Assets Category`.


---
*Syntaxes:*

[mode, patches, types] spawn `BIS_fnc_exportCfgWeapons`

---
*Example 1:*

export `Arma 3: CfgWeapons Weapons]], [[Arma 3: CfgWeapons Vehicle Weapons]], [[Arma 3: CfgWeapons Items]], [[Arma 3: CfgWeapons Equipment`, screenshots:

```sqf
["Weapon"]			spawn BIS_fnc_exportCfgWeapons;	// Arma 3: CfgWeapons Weapons
["VehicleWeapon"]	spawn BIS_fnc_exportCfgWeapons;	// Arma 3: CfgWeapons Vehicle Weapons
["Item"]			spawn BIS_fnc_exportCfgWeapons;	// Arma 3: CfgWeapons Items
["Equipment"]		spawn BIS_fnc_exportCfgWeapons;	// Arma 3: CfgWeapons Equipment
["screenshots"]		spawn BIS_fnc_exportCfgWeapons;	// screenshots
["screenshotsTest"]	spawn BIS_fnc_exportCfgWeapons;	// screenshots test mode, does nothing
```