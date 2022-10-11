Returns if sides are friendly or hostile. For a value smaller than 0.6 it results in being enemy, otherwise it is friendly. See also `Side relations`.


---
*Example 1:*
```sqf
value = west getFriend east;
```

*Example 2:*
```sqf
_isEnemy = side _killer getFriend side _victim < 0.6;
```