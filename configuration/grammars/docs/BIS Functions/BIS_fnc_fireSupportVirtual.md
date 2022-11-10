Fires virtual mortar/artillery fire support.


---
*Syntaxes:*

[target, mag, radius, rounds, delay, conditionEnd, safezone, alt, speed, sounds] spawn `BIS_fnc_fireSupportVirtual`

---
*Example 1:*

```sqf
[BIS_Player, "Sh_82mm_AMOS", 100, 24, 10] spawn BIS_fnc_fireSupportVirtual;
```

*Example 2:*

```sqf
[[3600, 3600, 0], nil, 100, 24, 10] spawn BIS_fnc_fireSupportVirtual;
```

*Example 3:*

```sqf
[BIS_Player, nil, 100, 24, 10, {dayTime > 20}, 50] spawn BIS_fnc_fireSupportVirtual;
```