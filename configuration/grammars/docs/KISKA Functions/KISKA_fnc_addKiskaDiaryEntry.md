#### Description:
Used as a unified point of adding diary entries for KISKA.

#### Parameters:
0: **_textEntry** *(STRING or ARRAY)* - The text entry in createDiaryRecord.If array, format is [title,description,icon].

1: **_task** *(TASK)* - A task attached to the diary record

2: **_taskState** *(STRING)* - The state of the task

3: **_showTitle** *(BOOL)* - Whether or not to show title in the description section as well

#### Returns:
*(DIARY-RECORD)* - An entry in the users diary

#### Examples:
```sqf
[["test title","test text"]] call KISKA_fnc_addKiskaDiaryEntry;
```

