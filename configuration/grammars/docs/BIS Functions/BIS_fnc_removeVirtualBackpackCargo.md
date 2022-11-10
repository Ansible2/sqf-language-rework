Remove virtual backpacks from an object (e.g., ammo box). Virtual items can be selected in the `Arsenal`.


---
*Syntaxes:*

[object,backpackClasses,removeGlobally] call `BIS_fnc_removeVirtualBackpackCargo`

---
*Example 1:*

```sqf
[ BIS_ammoBox, ["class_1","class_2"], true ] call BIS_fnc_removeVirtualBackpackCargo;
```