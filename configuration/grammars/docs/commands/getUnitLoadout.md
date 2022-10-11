Returns a ``Unit Loadout Array`` with all assigned items, weapons, containers and their stored items. When `String` for class name is supplied, the command will search **CfgVehicles** for the given class in order to extract the loadout from config. If `Config` is given, it will search given config (including ` mission config`) for the loadout information.
{{Feature|informative|The config should contain the following entries, which is standard for any unit class:<spoiler>
<syntaxhighlight lang="cpp">
class MyLoadout
{
	uniformClass = "U_B_CombatUniform_mcam";
	backpack = "B_AssaultPack_mcamo";
	linkedItems[] = { "V_PlateCarrier1_rgr", "H_HelmetB", "ItemCompass", "ItemWatch", "ItemRadio", "NVGoggles" };
	weapons[] = { "arifle_MX_ACO_pointer_F", "hgun_P07_F" };
	items[] = { "FirstAidKit", "FirstAidKit", "FirstAidKit" };
	magazines[] = {
		"30Rnd_65x39_caseless_mag", "16Rnd_9x21_Mag",
		"SmokeShell",
		"HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade",
		"HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade",
		"HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade", "HandGrenade"
	};
};
</syntaxhighlight>
</spoiler>
<syntaxhighlight lang="cpp"></syntaxhighlight><!-- for the spoiler to not eat the syntax highlight... -->


---
*Example 1:*
```sqf
getUnitLoadout player;
```

*Example 2:*
```sqf
getUnitLoadout [player, true];
```

*Example 3:*
```sqf
getUnitLoadout "B_Soldier_F";
```

*Example 4:*
```sqf
getUnitLoadout (configFile >> "CfgVehicles" >> "B_Soldier_F");
```

*Example 5:*
```sqf
getUnitLoadout (missionConfigFile >> "MyLoadout");
```