Adds an Event Handler to the given object.
* As many Event Handlers of any type can be added - existing Event Handlers do not get overwritten
* Use `removeEventHandler` to remove an Event Handler
Read `Event Handlers` for more information and a list of all available Event Handlers.


---
*Syntaxes:*

target `addEventHandler` [type, code]

---
*Example 1:*

```sqf
this addEventHandler ["Killed", {
	params ["_unit", "_killer"];
	systemChat format ["%1 has been killed by %2.", _unit, _killer];
}];
```

*Example 2:*

<sqs>_index = player addEventHandler ["Killed", { _this exec "playerKilled.sqs" }]</sqs>