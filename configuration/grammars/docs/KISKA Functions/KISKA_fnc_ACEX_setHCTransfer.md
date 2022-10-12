Simply sets the blacklist variable of a given unit from being transferred by the ACEX headless client module. Variable is set on the server.

```sqf
// disable transfer
[someGroup,true] call KISKA_fnc_ACEX_setHCTransfer;
```
```sqf
// enable transfer
[someGroup,false] call KISKA_fnc_ACEX_setHCTransfer;
```