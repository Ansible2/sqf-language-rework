Returns units in group/array below given Above Terrain Level (ATL) altitude.


---
*Syntaxes:*

units `unitsBelowHeight` height

group `unitsBelowHeight` height

---
*Example 1:*

```sqf
_allOnGroudUnits = group player unitsBelowHeight 10;
```

*Example 2:*

```sqf
_units = allUnits unitsBelowHeight 30;
```