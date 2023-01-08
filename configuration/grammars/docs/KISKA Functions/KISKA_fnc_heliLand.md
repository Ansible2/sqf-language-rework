#### Description:
Makes a helicopter land at a given position.

#### Parameters:
0: **_aircraft** *(OBJECT)* - The helicopter

1: **_landingPosition** *(ARRAY or OBJECT)* - Where to land. If object, position ATL is used.

2: **_landMode** *(STRING)* - Options are "LAND", "GET IN", and "GET OUT"

3: **_createHelipad** *(BOOL)* - If true, and invisible helipad will be created. Helipads strongly encourage where a unit will land.

4: **_afterLandCode** *(CODE, STRING, or ARRAY)* - Code to spawn after the helicopter has landed. See KISKA_fnc_callBack

    Parameters:
    - 0: *(OBJECT)* - The helicopter

#### Returns:
*(BOOL)* - True if helicopter can attempt, false if problem

#### Examples:
```sqf
[myHeli,position player] call KISKA_fnc_heliLand;
```

