Checks whether given position or object is inside given area. Use `inAreaArray` to check multiple positions/objects within area.


---
*Syntaxes:*

position `inArea` area

position `inArea` [center, a, b, angle, isRectangle, c]

---
*Example 1:*

```sqf
_playerIsInside = player inArea _myTrigger;
```

*Example 2:*

```sqf
_positionIsInside = _myPosition inArea [[100, 100, 0], 20, 30, 45, false];
```