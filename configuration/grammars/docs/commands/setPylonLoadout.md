Adds/overrides loadout to a vehicle pylon. **TransportPylonsComponent}} in vehicle config and {{hl|pylonWeapon** in the magazine config are required to run.


---
*Example 1:*
```sqf
vehicle player setPylonLoadout ["pylon1", ""];
```

*Example 2:*
Make all of your pylon weapons Twin Cannon 30 mm:

```sqf
for "_i" from 1 to 100 do {
	vehicle player setPylonLoadout [_i, "PylonWeapon_300Rnd_20mm_shells", true];
};
```

*Example 3:*
Showcase all possible magazines:

```sqf
[] spawn {
	{
		for "_i" from 1 to 100 do {
			vehicle player setPylonLoadout [_i, configName _x, true];
		};
		hint configName _x;
		sleep 1.5;
	} forEach ("getText (_x >> 'pylonWeapon') != ''" configClasses (configFile >> "CfgMagazines"));
};
```