Sends the audio message to the group radio channel. The message is defined in CfgRadio in the `description.ext` file or config radio protocol.


---
*Syntaxes:*

unit `groupRadio`  radioName

---
*Example 1:*

```sqf
_soldierOne groupRadio "messageOne";
```

*Example 2:*

```sqf
player groupRadio configName selectRandom ("true" configClasses (configFile >> "CfgRadio"));
```