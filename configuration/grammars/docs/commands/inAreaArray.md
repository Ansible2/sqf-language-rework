Returns given list of `Object`s and/or `Position`s that are in the given area, area defined by a trigger, marker, location or array.


---
*Syntaxes:*

positions `inAreaArray` area

positions `inAreaArray`  [center, a, b, angle, isRectangle, c]

---
*Example 1:*

```sqf
vehicles inAreaArray myTrigger;
```

*Example 2:*

```sqf
allUnits inAreaArray "myMarker";
```

*Example 3:*

```sqf
allPlayers inAreaArray myLocation;
```

*Example 4:*

```sqf
allDead inAreaArray [[100, 100, 0], 20, 30, 45, false, 10];
```