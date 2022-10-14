Add given objects to the unit's list of synchronized objects.


---
*Syntaxes:*

unit `synchronizeObjectsAdd` objects

---
*Example 1:*

```sqf
_acm = _groupLogic createUnit ["AmbientCombatManager", position player, [], 0, "NONE"];
_acm synchronizeObjectsAdd [player];
```