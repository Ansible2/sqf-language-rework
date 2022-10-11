Forces **showCadetHints}} and <See hl Reference P> global Cadet [[Arma 3: Difficulty Settings|{{arma3** difficulty]], returns previous settings.


---
*Example 1:*
```sqf
private _previousSettings = forceCadetDifficulty [true, false];
```

*Example 2:*
```sqf
private _fnc_forceCadetDifficulty = 
{
	params ["_OKButtonPressed"];
	if (_OKButtonPressed) then
	{
		forceCadetDifficulty (switch (toLowerANSI configName ((configFile >> "CfgDifficultyPresets") select difficulty)) do
		{
			case "recruit";
			case "regular":
			{
				// showCadetHints = 1;
				// showCadetWP = 1;
				[true, true]
			};
			case "veteran":
			{
				// showCadetHints = 0;
				// showCadetWP = 1;
				[false, true]
			};
			default
			{
				// showCadetHints = 0;
				// showCadetWP = 0;
				[false, false]
			};
		});
	};
};
[true] call _fnc_forceCadetDifficulty;
[missionNamespace, "OnGameOptionsExited", _fnc_forceCadetDifficulty] call BIS_fnc_addScriptedEventHandler;
```