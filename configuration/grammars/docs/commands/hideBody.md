Hides dead body of the given unit. After a short delay, the body slowly sinks into the ground. After awhile, when group of the unit becomes `grpNull`, the body gets deleted and becomes `objNull`. If applied to alive unit, nothing happens until unit dies, then the unit's body gets hidden. If a dead unit is human player, the body is hidden but not deleted until player respawns.


---
*Example 1:*
```sqf
hideBody player1;
```