A non-existent `Diary Record`. To compare non-existent objects use `isNull` or `isEqualTo`:
* {{hl


---
*Syntaxes:*

`diaryRecordNull`

---
*Example 1:*

```sqf
isNull diaryRecordNull; // true
```

*Example 2:*

```sqf
isNull (objNull createDiaryRecord ["Diary", ["Title", "Text"]]); // true - objNull cannot take diary records
```

*Example 3:*

```sqf
str diaryRecordNull; // "No diary record"
```

*Example 4:*

```sqf
private _diaryRecord = diaryRecordNull;
if (damage player > 0.5) then
{
	_diaryRecord = player createDiaryRecord ["Diary", ["Heal yourself", "Ask a medic"]];
};
if (not isNull _diaryRecord) then { hint "Diary record added."; };
```