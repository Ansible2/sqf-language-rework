Create object with given shape defined as path to .p3d model. Supported `LOD`s include `Geometry`, `Fire Geometry`, `Roadway`, `View Geometry` and `ShadowVolume`. Supported features include collision, texturing, animation, penetration, AI spotting occlusion, and surface specific sounds (like footsteps). Unsupported features include PhysX, damage, AI pathfinding (causes walking through walls), and built in lights.<br><br>

Given the simulation limitations, global decorative objects can be created with very little network traffic. Objects that could be exclusively created with this command are: trees, bushes, rocks, bridges, roads, vehicle wrecks, custom models in mission, and other objects without a class in config. The height of the placement position might need to be adjusted experimentally.<br>
Some of the models can be found here: `createSimpleObject/objects`.<br>
For Livonia furniture see: [[Arma 3 Livonia Props]].<br><br>

See [[Arma 3: Simple Objects]] to learn more about simple objects.

 do simple objects support `getVariable` and `setVariable`.


---
*Example 1:*
```sqf
private _pos = player getRelPos [10, 0];
private _tank = createSimpleObject ["a3\armor_f_beta\apc_tracked_01\apc_tracked_01_rcws_f.p3d", _pos];
_tank setPos (_pos vectorAdd (getPosWorld _tank vectorDiff (_tank modelToWorld [0,0,0])));

_tank hideSelection ["zasleh", true];
_tank hideSelection ["zasleh2", true];
_tank hideSelection ["clan", true];
 
_tank animate ["Wheel_podkoloL3", 0.5, true];
_tank animate ["Wheel_podkoloL6", 0.5, true];
```

*Example 2:*
```sqf
private _pos = player getRelPos [10, 0];
private _tank = createSimpleObject ["B_APC_Tracked_01_CRV_F", AGLToASL _pos];
_tank setObjectTexture [0, "#(rgb,8,8,3)color(0,1,0,0.01)"];

_tank hideSelection ["zasleh", true];
_tank hideSelection ["zasleh2", true];
_tank hideSelection ["clan", true];
  
_tank animate ["Wheel_podkoloL3", 0.5, true];
_tank animate ["Wheel_podkoloL6", 0.5, true];
```