Returns the name of the topmost commanding menu or "" if the menu is closed. For action menu visibility check see `isActionMenuVisible`. See {{HashLink|#Notes}} for <See arm Reference 2>/<See arm Reference 3> structure.


---
*Syntaxes:*

`commandingMenu`

---
*Example 1:*

```sqf
waitUntil {commandingMenu == "RscStatus"}; hint "Press 4, I'm bleeding !";
```

*Example 2:*

```sqf
if (commandingMenu != "") then { hint "Command menu is opened" };
```