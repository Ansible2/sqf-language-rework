Covers the map except for a defined area. This function was designed to be used by the `Modules framework`, but it can also be used without the module. The effect does not move with the centerObject.<br><br>
It is essential for the function to work that `centerObject` has the variable `objectArea` defined.<br>
<sqf inline>centerObject setVariable ["objectArea", [sizeX, sizeY, rotation]]
```
* centerObject `Object` - Object which is used as center
* sizeX: `Number` -  Length in x in meters
* sizeY: `Number` - Length in y in meters
* rotation: `Number` - Rotation of the rectangle in degree


---
*Syntaxes:*

[centerUnit,units,init] call `BIS_fnc_moduleCoverMap`

---
*Example 1:*

```sqf
// covers the whole map except an area of 1000m by 1000m
// can be used to dynamically change size of the area during mission
centerObject setVariable ["objectArea",[1000, 1000, 0, false, 0]];
[_centerObject, [], true] call BIS_fnc_moduleCoverMap;
```