Removes a stacked event handler with specified custom id.


---
*Syntaxes:*

[id, event] call `BIS_fnc_removeStackedEventHandler`

---
*Example 1:*

```sqf
["someId", "onEachFrame"] call BIS_fnc_removeStackedEventHandler;
```