Converts position from object model space to world space in `PositionASL` format from the object's centre position.
{{Feature|important|
For `scaled objects`, the relative position will first be `multiplied` by the object scale.<br>
For example, if the object scale is 2, <sqf inline>_obj modelToWorldWorld [0,1,0]</sqf> will be offset `2 meters` from the model center (<sqf inline>[0,0,0]</sqf>).


---
*Example 1:*
```sqf
private _playersFrontWorld = player modelToWorldWorld [0,1,0];
```