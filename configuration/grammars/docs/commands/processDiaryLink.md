Opens the `Diary` screen on the subject/record specified by link. To get a valid link format, use `createDiaryLink`.


---
*Syntaxes:*

`processDiaryLink` link

---
*Example 1:*

```sqf
processDiaryLink createDiaryLink ["Tasks", (simpleTasks player) select 0, ""]; // Select a task in the Task menu
```

*Example 2:*

```sqf
// To select various tabs in the map screen:
processDiaryLink createDiaryLink ["selected_tab", player, ""];
// ... where "selected_tab" can be "Tasks", "Diary", "Units", "Players", "Statistics", other user created subjects
```