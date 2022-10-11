Moves the object to a given position (same as `createVehicle` placement algorithm). Uses either the position that's defined by the `position` param, or one of the marker positions from the markers array. The object is placed inside a circle with `position` as its center and `placement` as its radius. The type of placement could also be controlled with `special`.<br><br>
If position is in water and the vehicle can float, it is placed on water surface, otherwise it is placed on the ground, even if the ground is under water. If roof surfaces support walking, units will be placed on roofs if such position is given.


---
*Example 1:*
```sqf
// place the player at either [1000,2000], or one of the three markers positions
player setVehiclePosition [[1000,2000], ["Pos1","Pos2","Pos3"], 0, "CAN_COLLIDE"];
```

*Example 2:*
```sqf
heli setVehiclePosition [player, [], 0, "FLY"];
```

*Example 3:*
```sqf
_cam = "camera" camCreate [0,0,0];
_cam setDir random 360;
_cam setVehiclePosition]] [[5000,5000], [], 1000, "NONE"];
_cam setPosWorld (getPosWorld _cam vectorAdd [0,0,1.8]);
_cam cameraEffect ["Internal", "Back"];
```

*Example 4:*
```sqf
private _tablePos = player getRelPos [3, 0];
private _table = "Land_CampingTable_F" createVehicle [0,0,0];
private _laptop = "Land_Laptop_unfolded_F" createVehicle [0,0,0];
_table setPos _tablePos;
_laptop setVehiclePosition [_tablePos vectorAdd [0.5, 0.2, 10], [], 0, "CAN_COLLIDE"];
_laptop attachTo [_table];
```