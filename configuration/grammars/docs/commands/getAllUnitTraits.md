Returns unit traits, native or set by `setUnitTrait`.


---
*Example 1:*
```sqf
/* can return:
[
	["Medic", false],
	["Engineer", false],
	["ExplosiveSpecialist", false],
	["UavHacker", false],
	["CamouflageCoef", 1],
	["AudibleCoef", 1],
	["LoadCoef", 1],
	["test", "custom"]
]
*/
private _playerTraits = getAllUnitTraits player;
```

*Example 2:*
```sqf
private _unitTraits = getAllUnitTraits _unit;
private _indexes = [_unitTraits, "Medic"] call BIS_fnc_findNestedElement;
private _unitCanHeal = _unitTraits select (_indexes select 0) select 1;
```