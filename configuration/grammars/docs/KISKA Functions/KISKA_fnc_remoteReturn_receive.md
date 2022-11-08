#### Description:
The send back component of KISKAs remote returns. This catches what was sent in KISKA_fnc_remoteReturn_send and will send the variable back to the remoteExecutedOwner.

#### Parameters:
0: **_code** *(STRING)* - The code to execute to get a return

1: **_args** : *(ARRAY)* - An array of arguements for the _code

2: **_scheduled** : *(BOOL)* - Should _code be run in a scheduled environment

3: **_uniqueId** *(STRING)* - The unique variable id used to send the return back to the requester

#### Returns:
NOTHING

#### Examples:
```sqf
[
_code,
_args,
_scheduled,
_uniqueId,
clientOwner
] remoteExecCall ["KISKA_fnc_remoteReturn_receive",_target];
```

