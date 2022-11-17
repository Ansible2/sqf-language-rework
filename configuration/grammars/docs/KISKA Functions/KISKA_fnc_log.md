#### Description:
Prints a log with a script name to console. Whether or not something is logged depends on whether the script is set in the KISKA_logScripts array. If the script name (or "all") is found in the array a log is printed.

#### Parameters:
0: **_message** *(ANY)* - The message to send. If array and _joinString is true, will be used with the joinString command

1: **_logWithError** *(BOOL)* - Show error message on screen (BIS_fnc_error)

2: **_forceLog** *(BOOL)* - Print log regardless of KISKA_logScripts content

3: **_joinString** *(BOOL)* - Should this message joined into a string if an array

4: **_scriptName** *(STRING)* - The name of the script from where this message is being called

#### Returns:
*(ANY)* - The message sent

#### Examples:
```sqf
missionNamespace setVariable ["KISKA_doLog",true];
scriptName "My Script";
private _myvar = 1;
[["Hello Number",_myvar]] call KISKA_fnc_log;

// prints ["My Script"] "Hello Number 1" to console
```

