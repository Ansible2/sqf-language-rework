Continuously set WP of one group to a different group to hunt it. It does not change the group's behaviour.<br>
Script terminates if one of the groups is eliminated or if the optional condition is activated.


---
*Syntaxes:*

[stalker, stalked, refresh, radius, endCondition, endDestination] spawn `BIS_fnc_stalk`

---
*Example 1:*

```sqf
private _stalking = [BIS_grpStalkers, BIS_grpPlayer] spawn BIS_fnc_stalk;
```

*Example 2:*

```sqf
private _stalking = [grp1, group player, nil, nil, { player distance BIS_Heli < 100 }, "BIS_mrkRetreatMarker"] spawn BIS_fnc_stalk;
```

*Example 3:*

```sqf
private _stalking = [BIS_grpStalkers, BIS_grpPlayer, 20, 10, { BIS_Return }, 1] spawn BIS_fnc_stalk;
```

*Example 4:*

```sqf
private _stalking = [BIS_grpStalkers, BIS_grpPlayer, 5, 0, { dayTime > 20 }, [3600,600,0]] spawn BIS_fnc_stalk;
```