#### Description:
Waitunil that allows variable evaluation time instead of frame by frame.

#### Parameters:
0: **_condition** *(CODE, STRING, or ARRAY)* - Code that must evaluate as a `BOOL`.If `(_interval <= 0) AND (_unscheduled isEqualTo true)`, this will only accept CODEor `STRING` as an arguement for performance reasons and `_parameters` will be available in `_this`.(See KISKA_fnc_callBack)

1: **_function** *(CODE, STRING, or ARRAY)* - The code to execute upon condition being reached.(See KISKA_fnc_callBack)

2: **_interval** *(NUMBER)* - How often to check the condition

3: **_parameters** *(ARRAY)* - An array of local parameters that can be accessed with _this

4: **_unscheduled** *(BOOL)* - Run in unscheduled environment

#### Returns:
NOTHING

#### Examples:
```sqf
[
    {
        true
    },
    {
        hint "wait";
    },
    0.5,
    [],
    true
] call KISKA_fnc_waitUntil;
```

