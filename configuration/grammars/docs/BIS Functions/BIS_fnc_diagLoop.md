Runs scripted loop. Repeated call terminates previous loops.


---
*Syntaxes:*

[code,delay] spawn `BIS_fnc_diagLoop`

---
*Example 1:*

```sqf
[{systemChat "Loop!"}, 0.5] spawn BIS_fnc_diagLoop;
```