Sends the audio message to the side radio channel. The message is defined in CfgRadio in the `description.ext` file or config radio protocol. The transmission will play only on the PC where command was executed. If you need the transmission to play on all computers, you have to execute it globally (see `remoteExec`).


---
*Syntaxes:*

unit `sideRadio` radioName

[side, identity] `sideRadio` radioName

---
*Example 1:*

```sqf
_soldierOne sideRadio "messageOne";
```

*Example 2:*

```sqf
player sideRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```

*Example 3:*

```sqf
[west, "Base"] sideRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```