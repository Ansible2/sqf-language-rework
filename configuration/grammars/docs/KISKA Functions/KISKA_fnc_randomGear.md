#### Description:
Randomizes gear based upon input arrays for each slot. Designed with civillians in mind.

#### Parameters:
0: **_unit** : *(OBJECT)* - The unit to randomize gear

1: **_uniforms** : *(ARRAY)* - Potential uniforms to wear, array can be formated as random or weighted random

2: **_headgear** : *(ARRAY)* - Potential headgear to wear, array can be formated as random or weighted random

3: **_facewear** : *(ARRAY)* - Potential facewear to wear, array can be formated as random or weighted random

4: **_vests** : *(ARRAY)* - Potential vests to wear, array can be formated as random or weighted random

#### Returns:
*(BOOL)* - true if unit was given random clothes, false if error

#### Examples:
```sqf
[_unit] call KISKA_fnc_randomGear;
```

