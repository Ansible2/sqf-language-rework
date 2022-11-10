Convert seconds to formatted string.


---
*Syntaxes:*

[totalSeconds, format, returnArray] call `BIS_fnc_secondsToString`

---
*Example 1:*

```sqf
hint format ["Hi, it is currently %1.", [time, "HH:MM"] call BIS_fnc_secondsToString];
```