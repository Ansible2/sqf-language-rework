Execute the scripted FSM. Shell for `execFSM` command


---
*Syntaxes:*

filename call `BIS_fnc_execFSM`

[params, filename] call `BIS_fnc_execFSM`

---
*Example 1:*

```sqf
private _handle = [[_param1, _param2, etc..], "test.fsm"] call BIS_fnc_execFSM;
```

*Example 2:*

```sqf
private _handle = "test.fsm" call BIS_fnc_execFSM;
```