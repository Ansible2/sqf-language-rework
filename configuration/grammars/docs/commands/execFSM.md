Execute scripted `FSM` and return the FSM handle or 0 when failed. The FSM file is first searched in the mission folder, then in the campaign scripts folder and finally in the global scripts folder. Argument (if any) are available in **_this** variable inside FSM. Variables set inside FSMs can be read/modified externally, using `setFSMVariable` and `getFSMVariable` commands.<br>
<br>
The return value is the FSM handle; it can be used to determine (via `completedFSM`) when the FSM has finished.


---
*Syntaxes:*

arguments `execFSM` fsmFilePath

`execFSM` fsmFilePath

---
*Example 1:*

```sqf
_id = player execFSM "test.fsm";
```

*Example 2:*

```sqf
_handle = [_a, _b, _c] execFSM "test.fsm";
```

*Example 3:*

```sqf
_handle = execFSM "test.fsm";
```