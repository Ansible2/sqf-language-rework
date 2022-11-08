#### Description:
Randomly assigns a loadout from the inputed array to the unit(s) provided.

#### Parameters:
0: **_units** *(OBJECT, GROUP, or ARRAY)* - The unit or units you want to select the
random loadout for. If array, accepts and array of objects.

1: **_loadoutArray** *(ARRAY)* - An array containing each loadout array.
Same syntax as getUnitLoadout return.

#### Returns:
_unitsChanged *(ARRAY)* - All the units changed

#### Examples:
```sqf
[guy,[globalLoadout1,globalLoadout2]] call KISKA_fnc_randomLoadout;
```

