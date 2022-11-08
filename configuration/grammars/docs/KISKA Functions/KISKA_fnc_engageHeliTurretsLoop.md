#### Description:
Sets up a helicopter's turrets to be able to properly engage enemies without without the pilot going crazy. Starts a loop that will reveal targets within a given radius to gunners to engage. You can use variables in the _heli's namepsace to adjust params dynamically: "KISKA_heliTurrets_endLoop" - ends the function "KISKA_heliTurrets_sleepTime" - adjusts the _sleepTime param "KISKA_heliTurrets_revealAccuracy" - adjusts the _revealAccuracy param "KISKA_heliTurrets_detectionRadius" - adjusts the _detectionRadius param "KISKA_heliTurrets_running" - checks if the system is running

#### Parameters:
0: **_heli** : *(OBJECT)* - The helicopter to set up

1: **_sleepTime** : *(NUMBER)* - Time in between each "refresh" of the targets gunners are revealed

2: **_revealAccuracy** : *(NUMBER)* - The accuracy of the reveals of targets for gunners

3: **_detectionRadius** : *(NUMBER)* - The radius within to search for targets for the gunners

4: **_skill** : *(NUMBER)* - The skill of the vehicle crew

5: **_makeInvulnerable** : *(BOOL)* - Makes vehicle crew invulnerable or not

6: **_turretsWithWeapons** : *(ARRAY)* - If you've already found which turrets to regard as "gunner" turrets, pass their turret paths
    or the function will get them.

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _vehicle,
    5,
    4,
    250,
    1,
    true
] spawn KISKA_fnc_engageHeliTurretsLoop;
```

