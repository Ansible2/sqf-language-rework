Virtual fire support - cluster shell.


---
*Syntaxes:*

[position,ammo,radius,rounds,delay,conditionEnd,safezone,altitude,velocity,sounds] spawn `BIS_fnc_fireSupportCluster`

---
*Example 1:*

```sqf
[BIS_Player, "G_40mm_HEDP", 100, [4,10], 10] spawn BIS_fnc_fireSupportCluster;
```

*Example 2:*

```sqf
[BIS_Victim,"G_40mm_HEDP", 100, [5,25], 10, { dayTime > 20 }, 75, 500, 150, ["shell1", "shell2"]] spawn BIS_fnc_fireSupportCluster;
```

*Example 3:*

```sqf
["BIS_mrkTargetArea", "", 100, [4,10], 10, { BIS_Player distance BIS_EscapeZone < 100 }] spawn BIS_fnc_fireSupportCluster;
```