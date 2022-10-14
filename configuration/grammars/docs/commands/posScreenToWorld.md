Converts map screen coordinates into world coordinates. Unlike `ctrlMapScreenToWorld`, this command returns world position is format [x, y, 0], otherwise it is identical to it.


---
*Syntaxes:*

map `posScreenToWorld` [x, y]

---
*Example 1:*

```sqf
_worldCoord = _control posScreenToWorld _ScreenCoord;
```

*Example 2:*

```sqf
_worldCoord = _control posScreenToWorld [_x, _y];
```

*Example 3:*

```sqf
_worldCoord = _control posScreenToWorld [0.5, 0.5];
```