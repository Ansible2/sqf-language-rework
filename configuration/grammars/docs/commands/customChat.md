Sends the chat message to the custom radio channel. The radio channel needs to be created on the server before hand, with `radioChannelCreate` command.


---
*Example 1:*
```sqf
_unit customChat [1, "Hi, I am a custom chat message"];
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