Removes all scripted event handler with given name.
Additionally "ScriptedEventHandlerRemoved" scripted EH is called for every removed event handler.


---
*Syntaxes:*

[namespace, name] call `BIS_fnc_removeAllScriptedEventHandlers`

---
*Example 1:*

```sqf
[missionNamespace, "event"] call BIS_fnc_removeAllScriptedEventHandlers;
```