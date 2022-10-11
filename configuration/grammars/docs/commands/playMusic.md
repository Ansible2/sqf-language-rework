Plays music defined in `Description.ext's CfgMusic` or config.cpp. If the `musicName` could not be found a message is logged into the .rpt file: **Music <`musicName`> not found**.
* [[Arma 3 CfgMusic]]
* [[Arma 2: CfgMusic]]
* `ArmA: Armed Assault: CfgMusic`
* `Operation Flashpoint: CfgMusic`


---
*Example 1:*
```sqf
playMusic "RadioAmbient1";
```

*Example 2:*
```sqf
playMusic ["RadioAmbient3", 3]; // start to play from 00:00:03
```

*Example 3:*
Play from 00:00:01 to 00:00:05:

```sqf
[] spawn {
	playMusic ["RadioAmbient5", 1];
	sleep 4;
	playMusic "";
};
```