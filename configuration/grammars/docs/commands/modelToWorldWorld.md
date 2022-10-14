Converts position from object model space to world space in `PositionASL` format from the object's centre position.


---
*Syntaxes:*

obj `modelToWorldWorld` modelPos

---
*Example 1:*

```sqf
private _playersFrontWorld = player modelToWorldWorld [0,1,0];
```