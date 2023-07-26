#### Description:
Adjusts the code for a given ID that will run when called from KISKA_fnc_managedRun_execute

#### Parameters:
0: **_nameOfCode** : *(STRING)* - The name of the code to update

1: **_code** : *(CODE, STRING, ARRAY)* - The code to run when ID is called (see KISKA_fnc_callBack). Use `{}`

#### Returns:
NOTHING

#### Examples:
```sqf
["KISKA_test",{hint "Hello World"}] call KISKA_fnc_managedRun_updateCode;
```

