Returns the name of the topmost commanding menu or "" if the menu is closed. For action menu visibility check see `isActionMenuVisible`. See *(Reference HashLink "#Notes")* for {{arma2}}/{{arma3}} structure.


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