Activates given object animation. Animation is defined in CfgModels `animations` class. Class names listed in CfgVehicles `AnimationSources` bound to "Proxy" controller can also be animated with `animate` command (see [[Arma 3: createVehicle/vehicles]]).


---
*Example 1:*
```sqf
_building animate ["maindoor", 1];
```

*Example 2:*
```sqf
_building animate ["Door_1_rot", 1, true];
```

*Example 3:*
Create Offroad and add flashing police light bar:

```sqf
offroad = "C_Offroad_01_F" createVehicle (player getRelPos [5, 0]);
offroad animate ["HidePolice", 0];
offroad animate ["BeaconsStart", 1];
```