Mortar/artillery fire support.


---
*Syntaxes:*

[arty,target,mag,radius,rounds,delay,conditionEnd,safezone] spawn `BIS_fnc_fireSupport`

---
*Example 1:*

```sqf
[BIS_Mortar, [3600,3600,0], "", 100, 24, 10] spawn BIS_fnc_fireSupport;
```

*Example 2:*

```sqf
[BIS_Mortar, BIS_Player, "8Rnd_82mm_Mo_shells", 100, 24, 10] spawn BIS_fnc_fireSupport;
```

*Example 3:*

```sqf
[BIS_Mortar, "BIS_mrkTargetArea", "8Rnd_82mm_Mo_shells", 100, 24, 10, { BIS_Player distance BIS_EscapeZone < 100 }] spawn BIS_fnc_fireSupport;
```