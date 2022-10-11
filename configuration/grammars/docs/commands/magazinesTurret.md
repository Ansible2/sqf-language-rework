Returns all magazines of given turret. Use turret path [-1] for driver's turret. Alternatively, use `magazinesAllTurrets`.


---
*Example 1:*
```sqf
_mags = vehicle player magazinesTurret [0, 0];
```

*Example 2:*
```sqf
_mags = _tank magazinesTurret [0];
```