Displays Picture in Picture.


---
*Syntaxes:*

[renderTarget, cameraParams, vehicle, replace] call `BIS_fnc_PIP`

---
*Example 1:*

```sqf
["rendertarget0", [heli1, heli1 selectionPosition "slingload0"], cargo1], heli1, false] call BIS_fnc_PIP;
```

*Example 2:*

```sqf
["rendertarget0", _myCamera] call BIS_fnc_PIP;
```