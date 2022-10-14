Adds a multiplayer event handler (EH) to the given object and returns EH handle.


---
*Syntaxes:*

object `addMPEventHandler` [type, expression]

---
*Example 1:*

```sqf
_index = player addMPEventHandler ["MPKilled", { _this execVM "playerKilled.sqf"; }];
```