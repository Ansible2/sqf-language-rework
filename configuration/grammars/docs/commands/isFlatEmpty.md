Checks given position against given filter params. Filter includes checks for:
* If there are any objects closer than given distance from given position (in 2D)
* If the area around position is flat enough to match given gradient
* If the given position is over water or land
* If the given position is over shore line
The gradient seems to correlate with general hill steepness: 0.1 (10%) ~6°, 0.5 (50%) ~27°, 1.0 (100%) ~45°, etc.


---
*Example 1:*
Check if player position is over land:

```sqf
_overLand = !(position player isFlatEmpty [-1, -1, -1, -1, 0, false] isEqualTo []);
```

*Example 2:*
Check if player position is over shore line:

```sqf
_overShore = !(position player isFlatEmpty  [-1, -1, -1, -1, 0, true] isEqualTo []);
```

*Example 3:*
Check if player position is over water:

```sqf
_overWater = !(position player isFlatEmpty  [-1, -1, -1, -1, 2, false] isEqualTo []);
```

*Example 4:*
Check if no object is closer than 5m to player position:

```sqf
_isEmpty = !(position player isFlatEmpty  [5, -1, -1, -1, -1, false, player] isEqualTo []);
```

*Example 5:*
Check if area 10m around player position is relatively flat:

```sqf
_isFlat = !(position player isFlatEmpty  [-1, -1, 0.3, 10, -1] isEqualTo []);
```

*Example 6:*
Check if area 15m around player position is very flat and empty:

```sqf
_isFlatEmpty = !(position player isFlatEmpty  [15, -1, 0.1, 15, -1, false, player] isEqualTo []);
```