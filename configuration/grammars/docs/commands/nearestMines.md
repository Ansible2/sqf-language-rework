Returns a list of nearest mines of the given types to the given position or object, within the specified distance.
If more than one mine are found they will be ordered by proximity by default, the closest one will be first in the array. The sorting can be turned off.


---
*Syntaxes:*

`nearestMines` [position, types, radius, sort, 2Dmode]

---
*Example 1:*

```sqf
nearestMines [player, ["MineBase"], 20];
```

*Example 2:*

```sqf
nearestMines [position player, ["DirectionalBombBase"], 500, true];
```

*Example 3:*

```sqf
nearestMines [[2716,2949,0], ["APERSTripMine_Wire_Ammo", "APERSMine_Range_Ammo"], 100, false, true];
```

*Example 4:*

Return every mine in 50 metres radius around player sorted by distance:

```sqf
nearestMines [player, [], 50];
```