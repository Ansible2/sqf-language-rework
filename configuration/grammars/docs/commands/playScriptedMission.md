Load the given world, launch an empty mission, and execute the given expression.
If provided, `config` can reference to the config entry, replacing `Description.ext` for this mission.


---
*Example 1:*
```sqf
playScriptedMission
[
	"desert_e",
	{
		execVM "\ca\missions_e\data\scenes\credits1\init.sqf";
	},
	configFile / "CfgMissions" / "Cutscenes" / "Credits"
];
```