Adds an event handler to the given display. See `User Interface Event Handlers` for the full list of event names.
If applicable, see `DIK_KeyCodes` for a list of key code constants, which are relevant to key related user interface events like: `KeyDown` & `KeyUp`.


---
*Syntaxes:*

display `displayAddEventHandler` [eventName, code]

---
*Example 1:*

```sqf
moduleName_keyDownEHId = findDisplay 46 displayAddEventHandler ["KeyDown", "hint str _this;"];
```

*Example 2:*

```sqf
moduleName_keyDownEHId = findDisplay 46 displayAddEventHandler ["KeyDown", { hint str _this }];
```