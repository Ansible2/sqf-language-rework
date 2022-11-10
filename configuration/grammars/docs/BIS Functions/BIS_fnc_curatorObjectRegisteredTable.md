Register curator object costs from a table.<br>
A table can be exported into a spreadsheet using `BIS_fnc_exportCuratorCostTable` and used as argument for this function.


---
*Syntaxes:*

[curatorLogic, [className, cost, className, cost...]] call `BIS_fnc_curatorObjectRegisteredTable`

---
*Example 1:*

```sqf
// Nothing but the listed flare modules will show up in the curator's unit list
[getAssignedCuratorLogic player, ["ModuleFlareWhite_F",0.02,"ModuleFlareYellow_F",0.02,"ModuleFlareGreen_F",0.02]] call BIS_fnc_curatorObjectRegisteredTable;
```