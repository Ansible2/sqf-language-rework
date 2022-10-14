Sends the audio message to the command radio channel. The message is defined in CfgRadio in the `description.ext` file or config radio protocol. The transmission will play only on the PC where command was executed. If you need the transmission to play on all computers, you have to execute it globally (see `remoteExec`).


---
*Syntaxes:*

unit `commandRadio` radioName

[side, identity] `commandRadio` radioName

---
*Example 1:*

```sqf
_soldierOne commandRadio "messageOne";
```

*Example 2:*

```sqf
player commandRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```

*Example 3:*

```sqf
[west, "Base"] commandRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```