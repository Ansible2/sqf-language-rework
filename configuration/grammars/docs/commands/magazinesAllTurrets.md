Returns all magazines (including empty) from all vehicle turrets (including driver turret [-1]) and their ammo counts. Since Arma 3 v2.08.148327 it is possible to exclude person turrets from returned results.


---
*Example 1:*
```sqf
_mags = magazinesAllTurrets vehicle player;
```

*Example 2:*
```sqf
_mags = magazinesAllTurrets [vehicle player, true];
```