Types text to the vehicle radio channel. The text will be visible only on the PC where command was executed. If you need the message to show on all computers, you have to execute it globally, see `remoteExec`.


---
*Example 1:*
```sqf
vehicle player vehicleChat "Show this text";
```

*Example 2:*
```sqf
driver vehicle player sideChat "sideChat";
driver vehicle player globalChat "globalChat";
driver vehicle player groupChat "groupChat";
vehicle player vehicleChat "vehicleChat";
driver vehicle player commandChat "commandChat";
driver vehicle player customChat [1, "customChat"];
systemChat "systemChat";
```