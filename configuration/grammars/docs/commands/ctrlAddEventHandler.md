Add an event handler to the given control.


---
*Syntaxes:*

control `ctrlAddEventHandler`  [handler, function]

---
*Example 1:*

```sqf
_map ctrlAddEventHandler ["draw", "_this call BIS_fnc_strategicMapOpen_draw"];
```

*Example 2:*

```sqf
_map ctrlAddEventHandler ["draw", { hintSilent str _this }];
```