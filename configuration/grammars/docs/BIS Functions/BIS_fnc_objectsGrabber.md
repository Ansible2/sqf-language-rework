Converts a set of placed objects to an object array (`as a `String``) for the `DynO mapper`.<br>
Format is the following. First, the header:

```sqf
/*
Grab data:
Mission: TheMissionName
World: Stratis
Anchor position: [3781.59, 3289.67]
Area size: 50
Using orientation of objects: yes/no
*/
```

Then, data:

```sqf
[
	["B_UAV_01_F",[-5.23706,-0.183594,-0.00126648],167.39,1,0,[0.605018,-0.575293],"","",true,false], 
	["C_Offroad_01_F",[-4.25903,4.62158,0.0630951],224.14,1,0,[0.812812,0.190543],"","",true,false]
]
```

or, if object orientation is not used:

```sqf
[
	["B_UAV_01_F",[-5.23706,-0.183594,-0.00126648],167.39,1,0,[],"","",true,false], 
	["C_Offroad_01_F",[-4.25903,4.62158,0.0630951],224.14,1,0,[],"","",true,false]
]
```


---
*Syntaxes:*

[position, size, objectOrientation] call `BIS_fnc_objectsGrabber`

---
*Example 1:*

```sqf
[getPos player, 20, true] call BIS_fnc_objectsGrabber;
```