#### Description:
Standerdizes a means of passing a callback function to another function along with custom arguments.

#### Parameters:
0: **_defaultArgs** *(ARRAY)* - Default arguements. These would be what a functionwriter would put inside of their code as arguements that will always be passedin the _this magic variable

1: **_callBackFunction** *(CODE, STRING, ARRAY)* - Code to call, compile and call, and/orarguements to pass to the code (in _thisArgs variable). Array is formatted as[*(args array)*,code or string (to compile)]

2: **_runInScheduled** *(BOOL)* - Spawns the code in a scheduled thread

#### Returns:
*(ANY)* - Whatever the callback function returns or scripthandle if run in scheduled

#### Examples:
```sqf
[
    [],
    [
        // hint player
        [player],
        {hint (_thisArgs select 0)}
    ]
] call KISKA_fnc_callBack
```

