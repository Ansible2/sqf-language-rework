Checks for object intersection with a virtual line between two positions.
{{Feature|informative|
* Does not work under water.
* Max harcoded distance is 1000m.


---
*Example 1:*
```sqf
private _hasStraightLineToChopper = lineIntersects [eyePos player, aimPos chopper, player, chopper];
```