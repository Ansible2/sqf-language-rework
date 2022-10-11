Sets string representation of an object to a custom string.<br>
When a vehicle is created and named in the editor, the name becomes both the variable containing the vehicle object and the string representation of the vehicle object.
In scripts an extra step is needed to achieve the same effect. See [[<See PAGENA Reference E>#Example 1|Example 1]].


---
*Example 1:*
```sqf
private _playersCar = vehicle player;
systemChat str _playersCar; // displays e.g "ce06b00# 164274: offroad_01_unarmed_f.p3d"

_playersCar setVehicleVarName "MyOffroad";
systemChat str _playersCar;	// displays "MyOffroad"

isNil "MyOffroad"; 			// true - the MyOffroad variable is not set
MyOffroad = _playersCar;	// now it is
publicVariable "MyOffroad";	// broadcasts it over the network
```

*Example 2:*
```sqf
_offroad setVehicleVarName ""; // Reset string representation to the default value
```