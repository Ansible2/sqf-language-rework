Unassigns existing item and tries to put it into inventory. If there is no space in inventory the item simply disappears.


---
*Example 1:*
```sqf
_bluforUnit unassignItem "NVGoggles";
_bluforUnit removeItem "NVGoggles";
_opforUnit unassignItem "NVGoggles_OPFOR";
_opforUnit removeItem "NVGoggles_OPFOR";
_independentUnit unassignItem "NVGoggles_INDEP";
_independentUnit removeItem "NVGoggles_INDEP";
```

*Example 2:*
```sqf
{
   _x unassignItem hmd _x; // Unassign (not remove) NVGs from all units. The class name of the NVG is not needed
} forEach allUnits;
```