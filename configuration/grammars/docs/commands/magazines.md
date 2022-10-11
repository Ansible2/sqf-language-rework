Returns array of type names of all vehicle's magazines. When applied to a unit, the command behaves differently and will omit magazines already loaded into unit's weapons. Use `currentMagazine` to get this information for a currently loaded magazine.


---
*Example 1:*
```sqf
_mags = magazines player;
```