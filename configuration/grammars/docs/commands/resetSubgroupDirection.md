Sets ` formation direction` of a group relative to current direction of the group leader. The group units will change their positions to form new formation if new formation direction is different (approx +/- 15 degrees). Does the same as:<br>

```sqf
_grp setFormDir getDir leader _grp;
```


---
*Syntaxes:*

`resetSubgroupDirection` unit

---
*Example 1:*

```sqf
resetSubgroupDirection myUnit;
```