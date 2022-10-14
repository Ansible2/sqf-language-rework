Returns a ``Unit Loadout Array`` with all assigned items, weapons, containers and their stored items. When `String` for class name is supplied, the command will search **CfgVehicles** for the given class in order to extract the loadout from config. If `Config` is given, it will search given config (including ` mission config`) for the loadout information.


---
*Syntaxes:*

`getUnitLoadout` unit

`getUnitLoadout` [unit, fullMagazines]

`getUnitLoadout` name

`getUnitLoadout` config

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