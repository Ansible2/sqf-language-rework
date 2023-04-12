#### Description:
Gets a variable from a remote target object, id, or string (uses remoteExec targets) Takes a bit of time and therefore needs to be scheduled.

#### Parameters:
0: **_variableName** : *(STRING)* - The string name of the varaible to get

1: **_namespace** : *(NAMESPACE, OBJECT, STRING, CONTROL, GROUP, or LOCATION)* - The namespace to get the variable from

2: **_defaultValue** : *(ANY)* - If the variable does not exist for the target, what should be returned instead

3: **_target** : *(NUMBER, OBJECT, or STRING)* - Where the _target is local will be where the variable is taken from (the machine to get the variable from)

#### Returns:
*(ANY)* - Whatever the variable is, nil otherwise

#### Examples:
```sqf
[] spawn {
    // need to call for direct return
    private _serversSomeVariable = [
        "someVariable",
        missionNamespace,
        "",
        2
    ] call KISKA_fnc_getVariableTarget;
};
```

