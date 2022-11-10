Opens the `Arma 3: Splendid Config Viewer|Splendid&trade; Config Viewer`.


---
*Syntaxes:*

[parent, cfg, showOk, onSelect, onAdd, header] call `BIS_fnc_configViewer`

---
*Example 1:*

```sqf
call BIS_fnc_configViewer;
```

*Example 2:*

```sqf
private _return = [
	nil,
	configFile >> "CfgWeapons",
	true,
	nil,
	{
		params ["_cfg"];
		if (
			getNumber(_cfg >> "scope") == 2 &&
			{ // Layzy evaluation
				getNumber(_cfg >> "type") in [1,2,4] && // primary, secondary, handgun weapons
				{ !isClass (_cfg >> "LinkedItems") or getText(_cfg >> "baseWeapon") == configName _cfg } // only base weapons, no accessories
			}
		) exitWith {
			[_cfg] call BIS_fnc_displayName; // add the weapon with its displayname
		};
		"" // don't add
	},
	"Select Weapon"
] call BIS_fnc_configViewer;
_cfgSelected = _return param [0, configNull];
systemChat str [configName _cfgSelected, _cfgSelected];
```