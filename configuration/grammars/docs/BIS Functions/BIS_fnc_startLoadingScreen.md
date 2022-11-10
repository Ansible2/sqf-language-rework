Register a loading screen. Start the loading when it is the first one registered.


---
*Syntaxes:*

[screenId, layout] call `BIS_fnc_startLoadingScreen`

---
*Example 1:*

```sqf
["myLoadingScreen", "Loading… wait for my splendid™ mission!"] call BIS_fnc_startLoadingScreen;
uiSleep 3;
"myLoadingScreen" call BIS_fnc_endLoadingScreen;
```