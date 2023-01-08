#### Description:
The send back component of KISKA_fnc_getVariableTarget that is executed on the target. Shouldn't be called on its own.

#### Parameters:
0: **_namespace** : *(NAMESPACE, OBJECT, STRING, GROUP, CONTROL, or LOCATION)* - The namespace to get the variable from

1: **_variableName** : *(STRING)* - The string name of the varaible to get

2: **_saveVariable** : *(STRING)* - A unique string name for the variable to be saved in on the sender's machine

3: **_defaultValue** : *(ANY)* - If the variable does not exist for the target, what should be returned instead

4: **_sendBackTarget** : *(ANY)* - The clientOwner id of whoever sent the request

#### Returns:
NOTHING

#### Examples:
```sqf
[
    _namespace,
    _variableName,
    _saveVariable,
    _defaultValue,
    clientOwner
] remoteExecCall ["KISKA_fnc_getVariableTarget_sendBack",_target];
```

