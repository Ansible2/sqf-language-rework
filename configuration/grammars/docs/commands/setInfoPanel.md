Opens given component or first component of given component type on specified info panel.


---
*Example 1:*
```sqf
// opens slingload assistant on right panel
private _result = setInfoPanel ["VehicleSystemsDisplayManagerComponentRight", "SlingLoadDisplayComponent"];
if (!_result) then { hint "could not open the slingload assistant, sorry" };
```