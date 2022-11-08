#### Description:
Searchs missionConfigFile, campaignConfigFile, and the configFile (in that order) to find a config based upon the sub paths provided. Returns the first one it finds. The BIS counterpart to this is BIS_fnc_loadClass and while it can be about 0.0005-0.0010ms faster if the path is short (about 2 entries). It can yield about 0.005ms faster in various cases.

#### Parameters:
0: **_pathArray** : *(ARRAY)* - The array in string format

#### Returns:
*(CONFIG)* - The first config path if found or configNull if not

#### Examples:
```sqf
_configPath = [["CfgMusic","Music_Intro_02_MissionStart"]] call KISKA_fnc_findConfigAny;
```

