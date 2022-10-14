Orders a unit to process command defined by `FSM` file (`via` the radio).


---
*Syntaxes:*

unitName `commandFSM` [fsmFile, position, target]

---
*Example 1:*

```sqf
_soldierOne commandFSM ["move.fsm", position player, player];
```