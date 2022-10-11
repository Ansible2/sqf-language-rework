Plays given `CfgSounds` sound or a [[Arma 3: Sound Files| sound file]] given by file path through a dedicated UI sound channel unaffected by the global mixer volumes. If the file path is given, the leading slash will be ignored.


---
*Example 1:*
```sqf
playSoundUI ["Alarm", 0.5, 0.5];
```

*Example 2:*
```sqf
playSoundUI ["A3\Sounds_F\sfx\blip1.wss"];
```

*Example 3:*
Sound file extension must be specified even if a config entry has none:

```sqf
playSoundUI ["A3\Sounds_F\sfx\alarm_independent", 5, 1]; // no sound
playSoundUI ["A3\Sounds_F\sfx\alarm_independent.wss", 5, 1]; // alarm
```