Controls availability of component to given object info panel.


---
*Syntaxes:*

unit `enableInfoPanelComponent` [panelID, componentClassOrType, enable]

[unit, turretPath] `enableInfoPanelComponent` [panelID, componentClassOrType, enable]

---
*Example 1:*

```sqf
// enables slingload assistant on player's vehicle right panel at driver position
[vehicle player, [-1]] enableInfoPanelComponent ["VehicleSystemsDisplayManagerComponentRight", "SlingLoadDisplay", true];
```