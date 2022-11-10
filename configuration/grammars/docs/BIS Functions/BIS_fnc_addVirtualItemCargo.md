Add virtual items to an object (e.g., ammo box). Virtual items can be selected in the `Arsenal`.
If parameters 4 and 5 are used this function can replace `BIS_fnc_addVirtualWeaponCargo`, `BIS_fnc_addVirtualMagazineCargo` and `BIS_fnc_addVirtualBackpackCargo`.


---
*Syntaxes:*

[object, itemClasses, addItemsGlobal, arsenal, mode, itemType] call `BIS_fnc_addVirtualItemCargo`

---
*Example 1:*

```sqf
[BIS_ammoBox, ["class_1", "class_2"], false, true] call BIS_fnc_addVirtualItemCargo;
```