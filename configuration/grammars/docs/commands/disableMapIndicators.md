Command allows suppressing visualization of FRIENDLY, ENEMY, MINES and/or PING map indicators from difficulty setting EXTENDED MAP CONTENT.


---
*Syntaxes:*

`disableMapIndicators`  [disableFriendly, disableEnemy, disableMines, disablePing]

---
*Example 1:*

Disable visualization of friendly and enemy units:

```sqf
disableMapIndicators [true, true, false, false];
```