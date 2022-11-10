Moves units into vehicle seats. When units don't exist, it will create them in a group of vehicle's side.


---
*Syntaxes:*

[object, params, deleteCrew, anySeat, agents] call `BIS_fnc_initVehicleCrew`

---
*Example 1:*

```sqf
[ someVehicle, [player, "driver", 0], true, true ] call BIS_fnc_initVehicleCrew;
```