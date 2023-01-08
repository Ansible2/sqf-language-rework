#### Description:
Used as a means of expanding on the "expression" property of the CfgCommunicationMenu. This is essentially just another level of abrstraction to be able to more easily reuse code between similar supports and make things easier to read instead of fitting it all in the config.

#### Parameters:
0: **_supportClass** *(STRING)* - The class as defined in the CfgCommunicationMenu

1: **_commMenuArgs** *(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry0: **_caller** *(OBJECT)* - The player calling for support1: **_targetPosition** *(ARRAY)* - The position (AGLS) at which the call is being made
    (where the player is looking or if in the map, the position where their cursor is)2: **_target** *(OBJECT)* - The cursorTarget object of the player3: **_is3d** *(BOOL)* - False if in map, true if not4: **_commMenuId** *(NUMBER)* The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem5: **_supportType** *(NUMBER)* - The Support Type ID

2: **_roundCount** *(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)

#### Returns:
NOTHING

#### Examples:
```sqf
[] call KISKA_fnc_callingForArty;
```

