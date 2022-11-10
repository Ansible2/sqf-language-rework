Detects whether a position is within a square area of given size about center.


---
*Syntaxes:*

[center, size, position ] call `BIS_fnc_isInsideArea`

---
*Example 1:*

```sqf
// Check an area, centered on the player that is 10m wide and 10m tall
_size = [5, 5];
_checkPos = getPos player;
_inArea = [_checkPos, _size, _checkPos] call BIS_fnc_isInsideArea;
```