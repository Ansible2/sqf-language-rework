Assign a user friendly name to the `VM script` this command is executed from.


---
*Syntaxes:*

`scriptName` name

---
*Example 1:*

```sqf
scriptName "leetScript.sqf";
```

*Example 2:*

```sqf
scriptName format ["%1ARTY\data\scripts\ARTY_sadarmDeploy.sqf (_this: %1)", _this];
```