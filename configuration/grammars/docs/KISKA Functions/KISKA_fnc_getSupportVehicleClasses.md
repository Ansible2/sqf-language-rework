#### Description:
Gets mission configed default vehicle types available for KISKA supports.

#### Parameters:
0: **_side** *(SIDE)* - The side to search for

1: **_typeId** *(NUMBER)* - The type of vehicle to search for

#### Returns:
<ARRAY> - A list of vehicles listed under the relevant config

#### Examples:
```sqf
_bluforCAS_types = [BLUFOR,SUPPORT_TYPE_CAS] call KISKA_fnc_getSupportVehicleClasses;
```

