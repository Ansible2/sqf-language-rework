Remove a log record.


---
*Example 1:*
```sqf
private _diaryRecord = player createDiaryRecord ["diary", ["Subject", "Text"]];
// ...
player removeDiaryRecord ["Diary", _diaryRecord];
```