Order the given unit(s) to follow another from his own group as his `formation leader` (without radio messages).<br>
It is also used to order the unit to `return to formation` after e.g `doStop` even if it is the leader himself that should return to formation (see [[#Example 2|Example 2]]).


---
*Syntaxes:*

unit `doFollow` unitLead

---
*Example 1:*

```sqf
_soldier1 doFollow _soldier2;
```

*Example 2:*

```sqf
units _group doFollow leader _group; // returns all the units to formation
```