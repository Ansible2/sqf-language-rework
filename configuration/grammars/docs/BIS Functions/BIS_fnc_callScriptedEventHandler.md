Calls all the codes assigned to scripted event handler with given name. Since *(Reference GVI "arma3|1.68")* the code receives current EH id in the special variable: **_thisScriptedEventHandler**


---
*Syntaxes:*

[namespace, name, arguments, returnResults] call `BIS_fnc_callScriptedEventHandler`

---
*Example 1:*

```sqf
[missionNamespace, "event", [player, 123]] call BIS_fnc_callScriptedEventHandler;
```