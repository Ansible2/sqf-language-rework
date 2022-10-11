Set unit position rules. This command is the lowest level of priority for setting unit position and to be used in scripted	
FSM's. Priorities are:
# Unit pos commanded (from the commanding menu, higher priority).
# Unit pos scripted (from `setUnitPos` scripting command, medium priority).
# Unit pos FSM / `setUnitPosWeak` (used in the formation FSM, lowest priority).


---
*Example 1:*
```sqf
_soldier disableAI "FSM";
_soldier setUnitPosWeak "DOWN";
```