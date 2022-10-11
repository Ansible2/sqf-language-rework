Sends given audio message to the direct channel. Command operates just like xxxxRadio commands, but the sound is played over direct channel and is independent of `fadeSound`. The message is defined in CfgRadio in the `description.ext` file or config radio protocol or a kbAddTopic. The transmission will play only on the PC where command was executed. If you need the transmission to play on all computers, you have to execute it globally (see `remoteExec`).


---
*Example 1:*
```sqf
player directSay configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```