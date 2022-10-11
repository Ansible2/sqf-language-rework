Control what the unit(s) is/are glancing at (target or `Position`). If target is used, it will get revealed fully.

How frequently the unit(s) is/are glancing there depends on behaviour.


---
*Example 1:*
```sqf
_someSoldier glanceAt _otherSoldier;
```

*Example 2:*
```sqf
[_someSoldier, _otherSoldier] glanceAt markerPos "markerOne";
```