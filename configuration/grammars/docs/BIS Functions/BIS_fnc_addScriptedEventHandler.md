Adds a Scripted Event Handler and returns its ID. Additionally, the "ScriptedEventHandlerAdded" Scripted EH is called. For the full list of all available Scripted EHs see `Arma 3: Scripted Event Handlers`.


---
*Syntaxes:*

[namespace, name, code] call `BIS_fnc_addScriptedEventHandler`

---
*Example 1:*

```sqf
[missionNamespace, "event", { hint "Hello World" }] call BIS_fnc_addScriptedEventHandler;
```

*Example 2:*

```sqf
[true, "event", { hint "Hello World" }] call BIS_fnc_addScriptedEventHandler;
``` 
Boolean will default to `missionNamespace`.