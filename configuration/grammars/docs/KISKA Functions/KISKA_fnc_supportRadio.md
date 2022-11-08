#### Description:
Decides what radio message to play to provided targets.

#### Parameters:
0: **_messageType** *(STRING)* - The type of radio message to send

1: **_caller** *(OBJECT)* - The person sending the call (default is local player)

2: **_targets** *(NUMBER, OBJECT, STRING, GROUP, SIDE, ARRAY)* - The remoteExec targets for the radio call

#### Returns:
NOTHING

#### Examples:
```sqf
["artillery"] call KISKA_fnc_supportRadio;
```

