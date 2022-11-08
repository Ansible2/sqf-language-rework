#### Description:
Ejects units from vehicle and deploys chutes, will select CUP T10 chute if available. CAUTION: All units from a group THAT ARE IN THE SAME AIRCRAFT should be dropped with the same function call. Not doing so can see odd behaviour from the aircraft. This is tied to KISKA_fnc_staticLine_eject and the use of the leaveVehicle command. If there are units from the same group still in the aircraft when it is executed, the aircraft will ignore all commands and attempt to pickup those units that were dropped.

#### Parameters:
0: **_aircraft** *(OBJECT)* - The aircraft to drop units from

1: **_dropArray** *(ARRAY, GROUP, OBJECT)* - Units to drop. If array, can be groups and/or objects (example 2)

2: **_invincibleOnDrop** *(BOOL)* - Should the units be invincible while dropping?

#### Returns:
NOTHING

#### Examples:
```sqf
[plane,group] spawn KISKA_fnc_staticLine;
```
```sqf
[plane,[group1,unit2]] spawn KISKA_fnc_staticLine;
```

