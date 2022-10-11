Translates relative position from object model space to world space in `PositionAGL` format.<br>
This command will take into account `vectorUp` of the object when calculating relative coordinates.
For the `PositionASL` version of this command, see `modelToWorldWorld`.


---
*Example 1:*
```sqf
_aboveAndBehindPlayer = player modelToWorld [0,-1,3];
```