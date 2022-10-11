Returns an array of all mines in the mission


---
*Example 1:*
```sqf
hint format ["there are %1 mines total", count allMines];
```

*Example 2:*
```sqf
private _isFirstMineDetected = (allMines select 0) mineDetectedBy blufor;
```