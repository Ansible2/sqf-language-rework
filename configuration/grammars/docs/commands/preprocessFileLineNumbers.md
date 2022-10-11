Returns the preprocessed content of the given file. The preprocessor is C-like, it supports comments using /* */ and `PreProcessor Commands`. The preprocessor also adds a default debug entrypoint for compiler at the begining of script: **#line 1 "aFilename"**<br><br>

The `#line` keyword can be used in any script that are not preprocess, or with preprocess script with extra macro to protect reserverd sharp character. The format is:<br>
**`#line` <number> "<name>"**<br>
followed by new line. <number> could be only positive integer and <name> could be any name. This will be used only if an error occurs in the script. The error will contain the line:
**File <filename>, line <linenumber>**<br>
where <filename> will be the <name> you set and <linenumber> will be <number> + how many lines it is from the `#line` line. If the error happened on the line right under `#line` it will add 0 to <number>, if on second line, it will add 1 etc.<br><br>
It is possible to use more than one `#line` keywords, but it seems having just one at the top for little script is enough to pinpoint position of the error easily.


---
*Example 1:*
```sqf
_string = preprocessFileLineNumbers "A3\ui_f\scripts\IGUI\RscUnitInfo.sqf"
```

Result is: <br>
 #line 1 "A3\ui_f\scripts\IGUI\RscUnitInfo.sqf"<br>
 disableserialization;<br>
 ........