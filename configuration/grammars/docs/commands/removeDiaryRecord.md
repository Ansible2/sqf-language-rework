Remove a log record.


---
*Syntaxes:*

unit `removeDiaryRecord` [subject, diaryRecord]

---
*Example 1:*

```sqf
private _diaryRecord = player createDiaryRecord ["diary", ["Subject", "Text"]];
// ...
player removeDiaryRecord ["Diary", _diaryRecord];
```