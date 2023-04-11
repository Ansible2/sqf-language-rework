#### Description:
Creates a loop that is intedned to keep an AI convoy configured in the same fashion of KISKA_fnc_configureConvoy (group driver units) from being seperated by AI driving that encounters unknown obstacles.

#### Parameters:
0: **_convoyGroup** *(GROUP)* - The convoy group which includes all drivers

1: **_convoyVehicles** *(OBJECT[])* - The vehicles in the convoy. This should be sorted in the order they will drive

#### Returns:
NOTHING

#### Examples:
```sqf
private _convoyInfo = [BLUFOR,[vic1,vic2]] call KISKA_fnc_configureConvoy;
_convoyInfo spawn KISKA_fnc_startConvoy_basic;
```

