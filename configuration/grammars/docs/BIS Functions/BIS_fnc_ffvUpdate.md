Update Firing From Vehicle feature depending on condition defined in turret's config.


---
*Syntaxes:*

vehicle call `BIS_fnc_ffvUpdate`

---
*Example 1:*

```sqf
if (local _vehicle) then
{
	_vehicle animate ["Door_1", 1];
	_vehicle call BIS_fnc_ffvUpdate;
};
```