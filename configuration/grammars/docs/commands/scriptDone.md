Check if a script is finished running using the `Script Handle` returned by `execVM` or `spawn`.


---
*Syntaxes:*

`scriptDone` handle

---
*Example 1:*

```sqf
_scriptHandle = ["arguments"] execVM "scriptname.sqf";
waitUntil { scriptDone _scriptHandle };
```