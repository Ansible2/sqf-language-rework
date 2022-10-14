Check if the unit is ready. Unit is busy when it is given some command like `move`, until the command is finished.


---
*Syntaxes:*

`unitReady` unitName

---
*Example 1:*

```sqf
private _it = unitReady _soldierOne;
```