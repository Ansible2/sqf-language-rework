Removes scripted event handler with given name and id.
Additionally "ScriptedEventHandlerRemoved" scripted EH is called.


---
*Syntaxes:*

[namespace, name, id] call `BIS_fnc_removeScriptedEventHandler`

---
*Example 1:*

```sqf
[missionNamespace, "event", 2] call BIS_fnc_removeScriptedEventHandler;
```