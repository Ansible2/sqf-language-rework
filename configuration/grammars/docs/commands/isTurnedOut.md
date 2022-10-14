Returns `true` if given unit is turned out, otherwise `false`. The output changes to `true` after unit finished turning out, however will change to `false` almost immediately after unit is ordered to turn in.


---
*Syntaxes:*

`isTurnedOut` unit

---
*Example 1:*

```sqf
_commanderOut = isTurnedOut (tank turretUnit [0,0]);
```