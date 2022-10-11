Plays positional sound with given `filename` on every computer on network. Since Arma 2.10 the leading slash in file path will be ignored.


---
*Example 1:*
```sqf
playSound3D ["A3\Sounds_F\sfx\blip1.wss", player]
```

*Example 2:*
```sqf
playSound3D ["A3\Sounds_F\sfx\blip1.wss", player, false, getPosASL player, 1, 1, 0]
```

*Example 3:*
```sqf
playSound3D [getMissionPath "mySound.ogg", player]; // to play a mission directory sound
```

*Example 4:*
Sound file extension must be specified even if a config entry has none:

```sqf
playSound3D ["A3\Sounds_F\sfx\alarm_independent", player]; // no sound
playSound3D ["A3\Sounds_F\sfx\alarm_independent.wss", player]; // alarm
```