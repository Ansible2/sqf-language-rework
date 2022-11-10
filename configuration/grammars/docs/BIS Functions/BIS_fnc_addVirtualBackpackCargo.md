Add virtual backpacks to an object (e.g., ammo box). Virtual items can be selected in the `Arsenal`.


---
*Syntaxes:*

[object,backpackClasses,addItemsGlobal,arsenal] call `BIS_fnc_addVirtualBackpackCargo`

---
*Example 1:*

```sqf
[ BIS_ammoBox, ["class_1","class_2"], false, true ] call BIS_fnc_addVirtualBackpackCargo;
```