Unregister a loading screen. When none other remains, end the loading.


---
*Syntaxes:*

screenId call `BIS_fnc_endLoadingScreen`

---
*Example 1:*

```sqf
["myLoadingScreen", "Loading… wait for my splendid™ mission!"] call BIS_fnc_startLoadingScreen;
uiSleep 3;
"myLoadingScreen" call BIS_fnc_endLoadingScreen;
```