#### Description:
Fires a number of rounds from AAA piece at target with random disperstion values. To stop, set the variable "KISKA_runCIWS" to false.

#### Parameters:
0: **_turret** : *(OBJECT)* - The CIWS turret

1: **_searchDistance** : *(NUMBER)* - How far out will the CIWS be notified of a target

2: **_engageAboveAltitude** : *(NUMBER)* - What altittiude (AGL) does the target need to be above to be engaged

3: **_searchInterval** : *(NUMBER)* - Time between checks for targets in area

4: **_doNotFireBelowAngle** : *(NUMBER)* - Below what angle should the turret NOT fire (keep it from firing at ground accidently)

5: **_pitchTolerance** : *(NUMBER)* - if the turret's pitch is within this margin of degrees to the target, it can engage

6: **_rotationTolerance** : *(NUMBER)* - if the turret's rotation is within this margin of degrees to the target, it can engage

7: **_soundAlarm** : *(BOOL)* - Play air raid siren and sound alarm when incoming detected

8: **_engageTypes** : *(ARRAY)* - This array decides what types of objects or entities should be engaged by the CIWS these are formatted as an array or string inside, using an array allows the decision to define a type as supported by nearEntities (which is much faster then the default nearObjects) simply by setting it as ["myEntityType",true]

#### Returns:
Nothing

#### Examples:
```sqf
[turret,3000,100] spawn KISKA_fnc_ciwsInit;
```

