Returns current timeout of the given trigger or -1 if countdown is not in progress.


---
*Syntaxes:*

`triggerTimeoutCurrent` trigger

---
*Example 1:*

```sqf
private _remaining = triggerTimeoutCurrent _trigger;
```