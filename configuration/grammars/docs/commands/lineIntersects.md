Checks for object intersection with a virtual line between two positions.


---
*Syntaxes:*

`lineIntersects` [begPos, endPos, objIgnore1, objIgnore2]

---
*Example 1:*

```sqf
private _hasStraightLineToChopper = lineIntersects [eyePos player, aimPos chopper, player, chopper];
```