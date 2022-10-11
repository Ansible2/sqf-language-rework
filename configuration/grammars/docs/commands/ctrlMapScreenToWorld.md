Converts map screen coordinates into world coordinates. Unlike `posScreenToWorld`, this command returns world position is format [x, y], otherwise it is identical to `posScreenToWorld`.


---
*Example 1:*
```sqf
_worldCoord = _control ctrlMapScreenToWorld _ScreenCoord;
```

*Example 2:*
```sqf
_worldCoord = _control ctrlMapScreenToWorld [_x, _y];
```

*Example 3:*
```sqf
_worldCoord = findDisplay 12 displayCtrl 51 ctrlMapScreenToWorld [0.5, 0.5];
```