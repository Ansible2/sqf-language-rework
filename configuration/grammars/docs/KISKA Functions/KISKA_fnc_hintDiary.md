#### Description:
Displays a hint to the player and (always) creates a chronological diary entry and an entry in the defined subject if desired.

#### Parameters:
0: **_hintText** *(STRING)* - The actual text shown in the hint

1: **_subject** *(STRING)* - The subject line in the journal for the hint (OPTIONAL)

2: **_silent** *(BOOL)* - true for silent hint

#### Returns:
<DIARY-RECORD> - The created diary record.

#### Examples:
```sqf
["this is the message", "Subject"] call KISKA_fnc_hintDiary;
```

