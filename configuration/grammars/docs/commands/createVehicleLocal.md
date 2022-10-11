Creates an object of the given type. Created object is not transferred through network in MP games. `netId` of such vehicle in multiplayer will be "0:0". To disable local vehicle creation, use `CfgDisabledCommands` to blacklist this command. Alternatively, you can use `createSimpleObject` with local option enabled where applicable.


---
*Example 1:*
```sqf
_lightsource = "#lightpoint" createVehicleLocal _pos;
```

*Example 2:*
```sqf
_lightsource = "#lightreflector" createVehicleLocal _pos;
```