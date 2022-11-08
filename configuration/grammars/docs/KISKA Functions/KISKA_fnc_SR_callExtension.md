#### Description:
Calls to KISKA_speechRecognition(_x64).dll extension to run a function within it.

#### Parameters:
0: **_functionToRun** *(STRING)* - The name of the function to run

1: **_args** *(ARRAY)* - Any arguments to pass to the extension

#### Returns:
<STRING> - Whatever the extension returns

#### Examples:
```sqf
private _return = ["kiska_ext_sr_startrecording"] call KISKA_fnc_SR_callExtension;
```
```sqf
private _return = [
"kiska_ext_sr_addgrammarxml",
["my grammar","...gramarxml"]
] call KISKA_fnc_SR_callExtension;
```

