Shows loading screen with the given text, using the given resource. While loading screen is shown, simulation and scene drawing is disabled, user control is disabled, mouse cursor is hidden, scripts run at full speed (50ms per frame instead of 3ms per frame for `Scheduled Scripts`).<br>

{{Feature|informative


---
*Example 1:*
```sqf
startLoadingScreen ["Loading My Mission, please wait..."];
```

*Example 2:*
```sqf
startLoadingScreen ["Can't skip loading time...", "MyLoadingRsc"];
```

*Example 3:*
```sqf
startLoadingScreen ["Loading My Mission"];
// code
progressLoadingScreen 0.5;
// code
endLoadingScreen;
```

*Example 4:*
```sqf
// this structure prevents error-prone or lengthy code to miss endLoadingScreen.
private _maxTime = diag_tickTime + 30; // max 30s of loading

startLoadingScreen ["Loading"];
private _handle = [] spawn {
	// code that may crash or take too long
};

waitUntil { uiSleep .1; scriptDone _handle || diag_tickTime > _maxTime };
endLoadingScreen;
```