Register "curatorObjectRegistered" handler. Cost of vehicles with crews will be automatically calculated based on vehicle + crew cost.


---
*Syntaxes:*

[curator, code] call `BIS_fnc_curatorObjectRegistered`

---
*Example 1:*

```sqf
[curatorModule, { hint format ["Curator:%1, Classes:%2", _this # 0, _this # 1] }] call BIS_fnc_curatorObjectRegistered;
```