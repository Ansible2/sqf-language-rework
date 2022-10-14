Types text to the system radio channel. The text will be visible only on the PC where command was executed. If you need the message to show on all computers, you have to execute it globally (see `remoteExec`).


---
*Syntaxes:*

`systemChat` text

---
*Example 1:*

```sqf
systemChat "Hello world!";
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