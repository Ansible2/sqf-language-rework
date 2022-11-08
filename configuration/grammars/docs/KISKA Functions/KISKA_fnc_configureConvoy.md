#### Description:
Creates several convoy vehicles and/or configures their groups to be ready to act as a convoy.

#### Parameters:
0: **_side** *(SIDE)* - What side this convoy is on

1: **_spawnInfo** *(ARRAY)* - An array of either or both option types:
    Option 1: *(ARRAY)* [spawnPosition (positionATL or OBJECT), spawnDirection, className] -
        Vehicle will be created from from the class name and spawned at the given position
        using KISKA_fnc_spawnVehicle
    Option 2: *(OBJECT)* -
        Must be a land vehicle with a driver

    These ideally will be in sequential order of how they line up to the lead vehicle
    which is the 0 index vehicle

#### Returns:
<ARRAY> -
		0: <GROUP> - The convoy group which includes all drivers
		1: <ARRAY> - The vehicles in the convoy (lead vehicle is index 0)

#### Examples:
```sqf
[
    BLUFOR,
    [
        leadVehicle,
        ["someVehicleClassToSpawn",myPos,-1]
    ]
] call KISKA_fnc_configureConvoy;
```

