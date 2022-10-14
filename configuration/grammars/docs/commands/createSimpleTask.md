Creates a new `Task` and adds it to the Diary.


---
*Syntaxes:*

unit `createSimpleTask`  [name, parentTask]

---
*Example 1:*

```sqf
_currentTask = player createSimpleTask ["NewTask"];
```

*Example 2:*

```sqf
_childTask = player createSimpleTask ["ChildTask", _currentTask];
```