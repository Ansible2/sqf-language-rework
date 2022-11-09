Creates child display of given display and loads from "resourceName". The notable difference between `createDisplay` and `createDialog` is that with `createDisplay` the player would be able to move around while the display is shown.<br>
Displays created with `createDisplay` or `createDialog` will take control of the mouse pointer and will close when user presses *(Reference Controls "Esc")*.


---
*Syntaxes:*

parent `createDisplay`  resourceName

---
*Example 1:*

```sqf
findDisplay 46 createDisplay "RscCredits";
```

*Example 2:*

```sqf
// creates an empty display
private _emptyDisplay = findDisplay 46 createDisplay "RscDisplayEmpty";
```