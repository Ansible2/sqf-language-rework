#### Description:
Randomizes gear based upon input arrays for each slot. Be aware that this function is very slow (can take >1ms) and should be used ideally on initialization for large numbers of units. The unit must be local to the machine where this function is executed. All gear arrays can be weighted or unweighted arrays.

#### Parameters:
0: **_unit** : *(OBJECT)* - The unit to randomize gear

1: **_uniforms** : *(STRING[] or (STRING,NUMBER)[])* - Potential uniforms to wear

2: **_headgear** : *(STRING[] or (STRING,NUMBER)[])* - Potential headgear to wear

3: **_facewear** : *(STRING[] or (STRING,NUMBER)[])* - Potential facewear (goggles) to wear

4: **_vests** : *(STRING[] or (STRING,NUMBER)[])* - Potential vests to wear

5: **_backpacks** : *(STRING[] or (STRING,NUMBER)[])* - Potential backpacks to wear

6: **_primaryWeapons** : *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Primary weapons and items to add to them (see example)

7: **_handguns** : *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Handgun weapons and items to add to them

8: **_secondaryWeapons** : *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Secondary (launcher) weapons and items to add to them

#### Returns:
NOTHING

#### Examples:
```sqf
private _uniforms = ["U_B_CombatUniform_mcam_vest"];
private _headgear = [];
private _facewear = [];
private _vests = [];
private _backpacks = [];
private _primaryWeapons = [
    // add a mag an optic to rifle
    ["arifle_MXC_F",["optic_Aco","30Rnd_65x39_caseless_mag"]]
];

[
    _unit,
    _uniforms,
    _headgear,
    _facewear,
    _vests,
    _backpacks,
    _primaryWeapons
] call KISKA_fnc_randomGear;
```

