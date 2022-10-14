Sets object heading. Angles are measured in degrees clockwise from north; the regular range goes from 0 to 360 (0° = N, 90° = E, 180° = S, 270° = W). Negative angles represent counter-clockwise angles.


---
*Syntaxes:*

object `setDir` heading

---
*Example 1:*

```sqf
myUnit setDir 45; // will set myUnit to face North-East
```

*Example 2:*

```sqf
myUnit setDir -675; // will also set myUnit to face North-East (= 45-360-360)
```

*Example 3:*

```sqf
MyUnit setDir 30;
MyUnit setFormDir 30; // needed for AI to keep the given direction
```

*Example 4:*

```sqf
// provided _myMine is local
_myMine setDir 45;
_myMine setPosWorld getPosWorld _myMine;

// or
[_myMine, 45] remoteExec ["setDir"];
```