Orders the unit(s) to watch the given position or target (via the radio). Use `objNull` as the target to order a unit to stop watching a position/target.


---
*Syntaxes:*

units `commandWatch` position

units `commandWatch` target

---
*Example 1:*

```sqf
_soldierOne commandWatch markerPos "MarkerMoveOne";
```

*Example 2:*

```sqf
[s1, s2] commandWatch player;
```