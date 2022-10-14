Defines trigger condition, activation and deactivation statements. Trigger condition has to return `Boolean`. `true` will activate the trigger, `false` will deactivate it (only if activation is set to repeat). `thisList` returns the same result as `list` command, which includes all entities in the trigger area that are capable of activating the trigger. Dead entities are excluded as well as crew in vehicles, vehicles themselves are included.


---
*Syntaxes:*

trigger `setTriggerStatements` [condition, activation, deactivation]

---
*Example 1:*

```sqf
_trg setTriggerStatements ["this", "hint 'trigger on'", "hint 'trigger off'"];
```