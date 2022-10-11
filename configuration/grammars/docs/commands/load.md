Returns the percentage of fullness of a unit's cargo. Output is usually in range 0..1, but can be higher after using certain scripting commands (like `addWeaponWithAttachmentsCargoGlobal`) which ignore load values when adding items.


---
*Example 1:*
```sqf
load player;
```

*Example 2:*
unit load calculation formula:

```sqf
private _unitLoad = loadAbs _unit / getNumber (configFile >> "CfgInventoryGlobalVariable" >> "maxSoldierLoad");
```