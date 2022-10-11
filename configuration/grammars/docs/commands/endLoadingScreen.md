Finishes loading screen started by `startLoadingScreen`.


---
*Example 1:*
```sqf
startLoadingScreen ["Loading My Mission"];
// code
progressLoadingScreen 0.5;
// code
endLoadingScreen;
```

*Example 2:*
```sqf
// this structure prevents error-prone or lengthy code to miss endLoadingScreen.
private _maxTime = diag_tickTime + 30; // max 30s of loading

startLoadingScreen ["Loading"];
private _handle = [] spawn {
	// code that may crash or take too long
};

waitUntil { sleep .01; scriptDone _handle || diag_tickTime > _maxTime };
endLoadingScreen;
```