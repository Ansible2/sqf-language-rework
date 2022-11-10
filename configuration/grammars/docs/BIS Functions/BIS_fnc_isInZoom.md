Checks if map zoom level is in between given interval.


---
*Syntaxes:*

[min, max] call `BIS_fnc_isInZoom`

---
*Example 1:*

```sqf
if ([0.001, 0.02] call BIS_fnc_isInZoom) then 
{
  hint "Zoom level is in between 0.001 and 0.02";
};
```