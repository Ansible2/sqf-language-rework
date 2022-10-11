Add an event handler to the given control.

{{Feature|important|
* Control event handlers are processed in reversed order, i.e. last added: first, first added: last. So if you have an override it should be set up in the 1st added EH.
* When using the event names listed `here` with the `ctrlAddEventHandler`, `ctrlSetEventHandler`, `displayAddEventHandler` or `displaySetEventHandler` commands, the prefix "on" in the event name must be removed (e.g. `ButtonDown` instead of `onButtonDown`).


---
*Example 1:*
```sqf
_map ctrlAddEventHandler ["draw", "_this call BIS_fnc_strategicMapOpen_draw"];
```

*Example 2:*
```sqf
_map ctrlAddEventHandler ["draw", { hintSilent str _this }];
```