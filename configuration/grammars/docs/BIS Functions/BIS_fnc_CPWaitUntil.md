Function waits until condition becomes true. Condition is checked with given interval.


---
*Syntaxes:*

[condition, interval] spawn `BIS_fnc_CPWaitUntil`

---
*Example 1:*

```sqf
[{ not alive player }, 2] spawn BIS_fnc_CPWaitUntil;
```