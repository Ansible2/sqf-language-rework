Host the multiplayer mission defined in the config class and opens the lobby with the scenario loaded. Must be called in UI action from a dialog.


---
*Example 1:*
```sqf
hostMission [configFile >> "CfgMissions" >> "MPMissions" >> _scenarioClassName, _currentlyActiveDisplay];
```

*Example 2:*
Launch host mission dialog from a client on dedicated server in <See arm Reference 3>:

```sqf
hostMission [
	configFile >> "CfgMissions" >> "MPmissions" >> "MP_COOP_m01",
	findDisplay 46
];
```