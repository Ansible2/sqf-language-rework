Checks if `code` or a variable was compiled final with `compileFinal`.


---
*Syntaxes:*

`isFinal` variable

`isFinal` code

---
*Example 1:*

```sqf
myCode = compileFinal "a = a + 1";
if (isFinal "myCode") then { systemChat "Code is compiled final." };
```

*Example 2:*

```sqf
if (isFinal BIS_fnc_arsenal) then {chint "You can't edit this function!" };
```

*Example 3:*

Avoid overwrite .rpt warnings:

```sqf
if (!isFinal fnc_myCode) then { fnc_myCode = compileFinal str_myCode };
```