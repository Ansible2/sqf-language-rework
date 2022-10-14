Returns current vehicle move/turn info (a getter for `sendSimpleCommand`) in format [moveInfo, turnInfo]. Possible values:

} - keyboard pilot is used, i.e. player is in the vehicle and is the `effectiveCommander` pressing any driving key (WASD or arrows). 
{{!}} width="50%" {{!}}
* **"LEFT"** - vehicle is turning left (use ` "STOPTURNING"` to cancel)
* **"RIGHT"** - vehicle is turning right (use ` "STOPTURNING"` to cancel)
* **"NONE"** - vehicle is not turning (when script command is used)
* **"ABS"** - vehicle is not turning (when keyboard pilot is used)
{{!}}}


---
*Syntaxes:*

`vehicleMoveInfo` vehicle

---
*Example 1:*

```sqf
onEachFrame { hintSilent str vehicleMoveInfo vehicle player };
```