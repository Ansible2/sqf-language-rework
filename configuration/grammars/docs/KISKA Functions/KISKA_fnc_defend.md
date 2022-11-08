#### Description:
A function for a group to defend a parsed location. Should be ran locally. Units will mount nearby static machine guns and garrison in nearby buildings. 10% chance to patrol the radius unless specified differently (100% when no available building positions). 0% chance to hold defensive positions in combat unless specified differently. Modifications: Accounted for doMove command's inability to use z-axis

#### Parameters:
0: **_group** *(GROUP or OBJECT)* - The group to do the defending

1: **_position** *(OBJECT, LOCATION, GROUP, or ARRAY)* - centre of area to defend *(ARRAY, OBJECT, LOCATION, GROUP)* (Default: _group)

2: **_radius** *(NUMBER)* - radius of area to defend *(NUMBER)* (Default: 50)

3: **_threshold** *(NUMBER)* - minimum building positions required to be considered for garrison *(NUMBER)* (Default: 3)

4: **_patrol** *(NUMBER or BOOL)* - chance for each unit to patrol instead of garrison, true for default, false for 0% *(NUMBER, BOOLEAN)* (Default: 0.1)

5: **_hold** *(NUMBER or BOOL)* - chance for each unit to hold their garrison in combat, true for 100%, false for 0% *(NUMBER, BOOLEAN)* (Default: 0)

#### Returns:
NOTHING

#### Examples:
```sqf
[this] call KISKA_fnc_defend
```

