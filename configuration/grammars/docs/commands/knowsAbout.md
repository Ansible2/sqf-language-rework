Checks if a group or a side knows about target.
* Enemy knowledge is instantly shared among the group units
* Units in the same group always perfectly know about each others
* AI knowledge cannot check beyond current `viewDistance` and it resets to zero as soon as the target's distance is over it<br>Note: neither fog nor daylight affect this behaviour
* Losing sight of a target for more than 120 seconds resets its `knowsAbout` to zero as well
* `Magic number` is the value that must be reached for a unit to shoot at an enemy (used by "Detected by" triggers as well):
:


---
*Syntaxes:*

who `knowsAbout` target

---
*Example 1:*

```sqf
_knowledge = player knowsAbout _target;
```

*Example 2:*

```sqf
_knowledge = (group player) knowsAbout _target;
```

*Example 3:*

```sqf
_knowledge = (side player) knowsAbout _target;
```