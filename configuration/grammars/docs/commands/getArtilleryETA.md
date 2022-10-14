Returns ETA to the target in seconds for given artillery unit based on target position and used magazine, -1 if target can't be hit.


---
*Syntaxes:*

unit `getArtilleryETA`  [targetPosition, magazineType]

---
*Example 1:*

```sqf
_mortar getArtilleryETA [getPos _target, getArtilleryAmmo [_mortar] select 0];
```

*Example 2:*

```sqf
_mortar getArtilleryETA [position _target, currentMagazine _mortar];
```