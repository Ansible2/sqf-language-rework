Sends the audio message to the vehicle radio channel. The message is defined in CfgRadio in the `description.ext` file or config radio protocol. The transmission will play only on the PC where command was executed. If you need the transmission to play on all computers, you have to execute it globally (see `remoteExec`).


---
*Example 1:*
```sqf
_soldierOne vehicleRadio "messageOne";
```

*Example 2:*
```sqf
player vehicleRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```