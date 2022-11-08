#### Description:
Simply sets the blacklist variable of a given unit from being transferred by the ACEX headless client module. Variable is set on the server.

#### Parameters:
0: **_unit** *(GROUP or OBJECT)* - The unit to blacklist

1: **_setting** *(BOOL)* - The blacklist value to set (true to blacklist, false to allow transfer)

#### Returns:
NOTHING

#### Examples:
```sqf
// disable transfer
[someGroup,true] call KISKA_fnc_ACEX_setHCTransfer;
```
```sqf
// enable transfer
[someGroup,false] call KISKA_fnc_ACEX_setHCTransfer;
```

