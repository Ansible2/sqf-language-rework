Return the current command type (empty string when no command) for the commander of given vehicle (or for a given soldier). Returned value can be one of:
{{Columns|4|
* "WAIT"
* "ATTACK"
* "HIDE"
* "MOVE"
* "HEAL"
* "REPAIR"
* "REFUEL"
* "REARM"
* "SUPPORT"
* "JOIN"
* "GET IN"
* "FIRE"
* "GET OUT"
* "STOP"
* "EXPECT"
* "ACTION"
* "ATTACKFIRE"
* "Suppress"


---
*Example 1:*
```sqf
_command = currentCommand player;
```