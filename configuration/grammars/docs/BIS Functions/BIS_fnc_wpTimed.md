COUNTDOWN `custom waypoint`.

Player has to reach waypoint area before time runs out.


---
*Syntaxes:*

`Custom Waypoint arguments`: [failCode,timeLimit,showHint]

---
*Example 1:*

```sqf
[player, position dude, 100, { hintC "You failed!" }, 42, true] spawn BIS_fnc_wpTimed;
```