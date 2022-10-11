Adds a user action event handler to the current mission and returns its event handler index.


---
*Example 1:*
```sqf
private _ehId = addUserActionEventHandler ["ReloadMagazine", "Activate", { systemChat "reloading!"; }];
```