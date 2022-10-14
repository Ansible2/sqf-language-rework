Creates a link to the given diary entry.


---
*Syntaxes:*

`createDiaryLink` [subject, record, text]

---
*Example 1:*

```sqf
_diaryRec1 = player createDiaryRecord ["Diary", ["Record 1", "We can not refer to the next record because it does not exist yet."]];
_diaryRec2 = player createDiaryRecord ["Diary", ["Record 2", "Go to " + createDiaryLink ["Diary", _diaryRec1, "record 1"]]];
_diaryRec3 = player createDiaryRecord ["Diary", ["Record 3", "Go to " + createDiaryLink ["Diary", _diaryRec2, "record 2"]]];
```

*Example 2:*

In this example, one can go to any next record.

```sqf
TAG_fnc_processDiaryLink = {
	processDiaryLink createDiaryLink ["Diary", _this, ""];
};
DiaryRec1 = player createDiaryRecord ["Diary", ["Record 1", 
	"Go to <execute expression='DiaryRec2 call TAG_fnc_processDiaryLink'>Record 2</execute>"
]];
DiaryRec2 = player createDiaryRecord ["Diary", ["Record 2", 
	"Go to <execute expression='DiaryRec3 call TAG_fnc_processDiaryLink'>Record 3</execute>"
]];
DiaryRec3 = player createDiaryRecord ["Diary", ["Record 3", 
	"Go to <execute expression='DiaryRec1 call TAG_fnc_processDiaryLink'>Record 1</execute>"
]];
```