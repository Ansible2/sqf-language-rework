Return whether a group's leader can issue attack commands to soldiers under his command.


---
*Syntaxes:*

`attackEnabled` name

---
*Example 1:*

```sqf
if (not attackEnabled _soldier) then { _soldier setCombatMode "Careless" };
```