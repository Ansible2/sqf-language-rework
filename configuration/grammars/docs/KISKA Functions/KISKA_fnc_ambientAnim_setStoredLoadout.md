#### Description:
When a unit has it's loadout adjusted for an ambient animation, the loadout they previously had is stored and restored after their ambient animation stops.

#### Parameters:
0: **_unit** *(OBJECT)* - The unit to animate

1: **_loadout** *(ARRAY)* - The loadout to store

#### Returns:
NOTHING

#### Examples:
```sqf
[
    someUnit,
    getUnitLoadout someUnit
] call KISKA_fnc_ambientAnim_setStoredLoadout;
```

