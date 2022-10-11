Enable / disable showing of HUD. Defines visibility of weapon crosshair and any informational tags that appear when pointing the weapon at an object as well as availability of the default action menu. Unfortunately, it also hides icons drawn with [[drawIcon3D]].


---
*Example 1:*
```sqf
showHUD false;
```

*Example 2:*
Hide vehicle radar and compass:

```sqf
showHUD [
  true, // scriptedHUD
  true, // info
  true, // radar
  true, // compass
  true, // direction
  true, // menu
  true, // group
  true, // cursors
  true, // panels
  true, // kills
  true  // showIcon3D
];
```

*Example 3:*
Check if HUD visibility is hardcoded in mission config and `showHUD` command is overriden:

```sqf
private _disabledShowHUD = isArray (missionConfigFile >> "showHUD");
```