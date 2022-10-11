Set variable to given value in the variable space of given FSM.<br>
The FSM handle is the number returned by the `execFSM` command.


---
*Example 1:*
```sqf
_handle = execFSM "test.fsm";
_handle setFSMVariable ["_foo", 23]; // sets variable _foo in the FSM to 23
```