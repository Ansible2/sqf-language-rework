Checks if file on given path exists. Uses same path resolve code as `loadFile`.


---
*Syntaxes:*

path

---
*Example 1:*

```sqf
fileExists "\a3\mySuperPath\bestFileEver.paa"; // returns false
```

*Example 2:*

```sqf
private _path = "a3\functions_f_mp_mark\revive\_addaction_revive.inc";
if (fileExists _path) then { loadFile _path } else { diag_log format ["File (%1) does not exist!", _path] };
```

*Example 3:*

```sqf
// Sometimes it might be better to check if a file exists instead of checking if path is empty ("")
private _class = "ModuleObjectiveRaceFinish_F";
private _picture = getText (configFile >> "CfgVehicles" >> _class >> "editorPreview");
if !(fileExists _picture) then { _picture = getText (configFile >> "CfgVehicles" >> _class >> "portrait") };
if !(fileExists _picture) then { _picture = getText (configFile >> "CfgVehicles" >> _class >> "icon") };
if !(fileExists _picture) then { _picture = getText (configFile >> "CfgVehicles" >> _class >> "picture") };
if !(fileExists _picture) then { systemChat "No valid picture found!" } else { systemChat _picture };
```