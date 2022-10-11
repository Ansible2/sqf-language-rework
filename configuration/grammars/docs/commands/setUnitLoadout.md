Creates a loadout from given inventory structure and applies it to a unit. When `String` for class name is supplied, the command will search **CfgVehicles** for the given class in order to extract the loadout from config. If `Config` is given, it will search given config (including ` mission config`) for the loadout information. In either case, the config should contain the following entries, which is standard for any unit class, for example:
<syntaxhighlight lang="cpp">
class MyLoadout
{
	uniformClass = "U_B_CombatUniform_mcam";
	backpack = "B_AssaultPack_mcamo";
	linkedItems[] = {"V_PlateCarrier1_rgr","H_HelmetB","ItemCompass","ItemWatch","ItemRadio","NVGoggles"};
	weapons[] = {"arifle_MX_ACO_pointer_F","hgun_P07_F"};
	items[] = {"FirstAidKit","FirstAidKit","FirstAidKit"};
	magazines[] = {"30Rnd_65x39_caseless_mag","16Rnd_9x21_Mag","SmokeShell","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade","HandGrenade"};
};
</syntaxhighlight>


---
*Example 1:*
```sqf
player_2 setUnitLoadout (getUnitLoadout player_1); // Copies loadout from player_1 and applies it to player_2
```

*Example 2:*
```sqf
player_2 setUnitLoadout [getUnitLoadout player_1, true]; // Copies loadout from player_1 and applies it to player_2 while topping up all magazines
```

*Example 3:*
```sqf
_unit setUnitLoadout "B_Soldier_F";
```

*Example 4:*
```sqf
_unit setUnitLoadout (configFile >> "CfgVehicles" >> "B_Soldier_F");
```

*Example 5:*
```sqf
_unit setUnitLoadout (missionConfigFile >> "MyLoadout");
```

*Example 6:*
Strip unit of everything:

```sqf
_unit setUnitLoadout (configFile >> "EmptyLoadout");
```