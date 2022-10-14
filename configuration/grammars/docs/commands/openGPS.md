Opens or closes minimap if player has **"ItemGPS"}} linked in inventory and {{hl|"MinimapDisplayComponent"** is not disabled with `enableInfoPanelComponent`. Returns `true` on success. If more than one minimap is open (see `infoPanels`, `infoPanel`) each call to the command will close only 1 minimap. Visibility of minimap can be checked with `visibleGPS` command.


---
*Syntaxes:*

`openGPS` open

---
*Example 1:*

```sqf
player linkItem "ItemGPS";
private _success = openGPS true;
```

*Example 2:*

To close all opened minimaps:

```sqf
while { openGPS false } do { };
// or
while { visibleGPS } do { openGPS false };
```