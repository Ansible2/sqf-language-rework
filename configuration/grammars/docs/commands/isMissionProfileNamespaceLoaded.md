The `missionProfileNamespace` variables are loaded at the start of a mission, before 'init.sqf' is executed. If the file with saved variables for current mission exists in user profile and is loaded, the command returns `true`. It also will return `true` after the first execution of `saveMissionProfileNamespace` command, which also creates the file.


---
*Syntaxes:*

`isMissionProfileNamespaceLoaded`

---
*Example 1:*

```sqf
private _isLoaded = isMissionProfileNamespaceLoaded;
```