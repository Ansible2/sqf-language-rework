#### Description:
Gets a remote return from a scripting command on a target machine. Basically remoteExec but with a return. Needs to be run in a scheduled environment as it takes time to receive the return. This should not be abused to obtain large returns over the network. Be smart and use for simple types (not massive arrays).

#### Parameters:
0: **_code** *(STRING)* - The command to execute on the target machine

1: **_defaultValue** : *(ANY)* - If the variable does not exist for the target, what should be returned instead

2: **_target** : *(NUMBER, OBJECT, or STRING)* - The target to execute the _code on

3: **_scheduled** : *(BOOL)* - Should _code be run in a scheduled environment (on target machine)

#### Returns:
*(ANY)* - Whatever the code returns

#### Examples:
```sqf
[] spawn {
    // need to call for direct return but in scheduled environment
    _clientIdFromServer = ["owner (_this select 0)",[player],2] call KISKA_fnc_remoteReturn_send;
};
```

