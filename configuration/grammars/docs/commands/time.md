Returns time elapsed since mission started (in seconds). The value is different on each client. If you need unified time, use `serverTime`.


---
*Syntaxes:*

`time`

---
*Example 1:*

```sqf
private _future = time + 30;
waitUntil { time >= _future };  // continue after 30 seconds
```

*Example 2:*

Wait until mission fully started:

```sqf
waitUntil { time > 0 };
```