Checks if one position is visible from another position and how much.
The results can be affected by `getTerrainGrid` value, especially if position is near the ground.
Particle effects such as smoke can also affect the results.


---
*Syntaxes:*

[ignore, LOD, ignore2] `checkVisibility` [beg, end]

---
*Example 1:*

```sqf
private _canSee = [objNull, "VIEW"] checkVisibility [eyePos player, eyePos unit1];
```