Changes the default cursor that appears when interacting with a map control to a custom one. Use an empty string to restore the default cursor.
.


---
*Example 1:*
```sqf
_map ctrlMapCursor ["Track", "Arrow"];
```

*Example 2:*
```sqf
uiNamespace setVariable ["_map", findDisplay 12 displayCtrl 51];
(uiNamespace getVariable "_map") ctrlMapCursor ["Track", "HC_overFriendly"];
```

*Example 3:*
```sqf
findDisplay 12 displayCtrl 51 ctrlMapCursor ["Scroll", "Wait"];
```

*Example 4:*
Cycle through all available cursors over custom map:

```sqf
[] spawn
{
	disableSerialization;
	_map = findDisplay 46 createDisplay "RscCredits" ctrlCreate ["RscMapControl", -1];
	_map ctrlSetPosition [0,0,1,1];
	_map ctrlCommit 0;
	{
		_map ctrlMapCursor ["", configName _x]; //<-- the actual usage
		hint format ["Current cursor: %1", configName _x];
		sleep 1;
	}
	forEach ("true" configClasses (configFile >> "CfgWrapperUI" >> "Cursors"));
};
```