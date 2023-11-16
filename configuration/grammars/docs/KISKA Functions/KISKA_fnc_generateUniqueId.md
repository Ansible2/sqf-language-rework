#### Description:
Creates a unique identifier with a given tag. The id format is: *tag*_*clientOwner*_*increment* which as an example could be `KISKA_uid_0_0` as the first unique id made in a single player scenario.

#### Parameters:
0: **_tag** *(STRING)* - The tag to assign to the uid

#### Returns:
*(STRING)* - the unique identifier

#### Examples:
```sqf
call KISKA_fnc_generateUniqueId;
// KISKA_uid_0_0
```
```sqf
["MYTAG"] call KISKA_fnc_generateUniqueId;
// MYTAG_uid_0_0
```

