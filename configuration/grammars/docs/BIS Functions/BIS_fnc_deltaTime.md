Calculates and returns the time's delta between previous and current call to this function.


---
*Syntaxes:*

[id, clear] call `BIS_fnc_deltaTime`

---
*Example 1:*

```sqf
["TAG_duration"] call BIS_fnc_deltaTime; // Defines the starting point
// ...
private _duration1 = ["TAG_duration"] call BIS_fnc_deltaTime; // Gets time between starting point and now
// ...
private _duration2 = ["TAG_duration"] call BIS_fnc_deltaTime; // Gets time between _duration1 and now
["TAG_duration", true] call BIS_fnc_deltaTime; // deletes the global variable "TAG_duration"
```