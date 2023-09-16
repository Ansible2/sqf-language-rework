#### Description:
Creates a unique identifier with a given tag

#### Parameters:
0: **_tag** *(STRING)* - The tag to assign to the uid

#### Returns:
*(STRING)* - the unique identifier

#### Examples:
```sqf
call KISKA_fnc_generateUniqueId;
// KISKA_uid_0
```
```sqf
["MYTAG"] call KISKA_fnc_generateUniqueId;
// MYTAG_uid_0
```

