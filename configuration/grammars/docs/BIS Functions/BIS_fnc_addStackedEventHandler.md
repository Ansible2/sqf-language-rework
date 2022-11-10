array. Note that if you try to add an empty EH, i.e. with empty code, it will simply be ignored.


---
*Syntaxes:*

[id, event, code, arguments] call `BIS_fnc_addStackedEventHandler`

---
*Example 1:*

```sqf
["someId", "onEachFrame", { hintSilent str time }] call BIS_fnc_addStackedEventHandler;
```

*Example 2:*

```sqf
["someId", "onEachFrame", {hintSilent str position (_this select 0)}, [player]] call BIS_fnc_addStackedEventHandler;
```

*Example 3:*

```sqf
private _eventName = "OnEachFrame";
missionNamespace getVariable [format ["BIS_stackedEventHandlers_%1", _eventName], []]; // gets an array with all existing ids
```