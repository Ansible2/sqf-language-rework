Add a "bullet camera" to shots fired by the specified unit.


---
*Syntaxes:*

unit call `BIS_fnc_diagBulletCam`

---
*Example 1:*

```sqf
player call BIS_fnc_diagBulletCam;
```

*Example 2:*

```sqf
// bullet camera will be removed after 10s
_unit = player;
_unit call BIS_fnc_diagBulletCam;
_ehIndex = _unit getVariable "BIS_fnc_diagBulletCam_fired";
sleep 10;
_unit removeEventHandler ["fired", _ehIndex];
```