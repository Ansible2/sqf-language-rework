Sets the object position above sea level. Given position must be in `PositionASL` format.


---
*Example 1:*
```sqf
player setPosASL [getPosASL player select 0, (getPosASL player select 1) + 10, getPosASL player select 2];
```

*Example 2:*
```sqf
_position = getPosASL _object;
_position set [2, 10]; // 10m above sea level
_object setPosASL _position;
```