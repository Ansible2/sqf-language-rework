Orders a unit to process command defined by `FSM` file (silently). 

Unlike with execFSM where `_this` is passed to the FSM, the following parameters are passed when using doFSM/commandFSM:

; _leader: leader of subgroup with this command 
; _destination: command destination/position
; _target: command target 
; _units: list of all persons in subgroup


---
*Syntaxes:*

unit `doFSM`  [fsmName, position, target]

---
*Example 1:*

```sqf
_soldierOne doFSM ["move.fsm", position player, player];
```

*Example 2:*

```sqf
units player doFSM ["move.fsm", position player, player];
```