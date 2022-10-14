Return the closest location of specified class to a given position. Checked range is unlimited (i.e. covers the whole map).


---
*Syntaxes:*

`nearestLocation` [position, locationClass]

---
*Example 1:*

```sqf
_nearestCity = nearestLocation [getPos player, "nameCity"];
```

*Example 2:*

```sqf
_anyNearestLocation = nearestLocation [player, ""];
```