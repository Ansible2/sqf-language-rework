Function that executes a user-defined code when a key has been held down for a long enough time.


---
*Syntaxes:*

[display, key, time, code, control] call `BIS_fnc_holdKey`

---
*Example 1:*

```sqf
[findDisplay 46, 36, 5, { hint "Key 'J' pressed for 5 seconds" }] call BIS_fnc_holdKey; // action is added to the mission display
```