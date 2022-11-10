Takes an array of data about a dynamic object template and creates the objects.


---
*Syntaxes:*

[position, azimuth, objectsArray, badChance] call `BIS_fnc_objectsMapper`

---
*Example 1:*

```sqf
private _objectsArray = [
	["B_UAV_01_F",[-5.23706,-0.183594,-0.00126648],167.39,1,0,[],"","",true,false], 
	["C_Offroad_01_F",[-4.25903,4.62158,0.0630951],224.14,1,0,[],"","",true,false]
];
[getMarkerPos "myBase", 0, _objectsArray, 0.5] call BIS_fnc_objectsMapper;
```