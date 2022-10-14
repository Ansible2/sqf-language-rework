Removes specified music track event handler.


---
*Syntaxes:*

`removeMusicEventHandler` [type, id]

---
*Example 1:*

```sqf
removeMusicEventHandler ["MusicStart", 12];
```

*Example 2:*

```sqf
removeMusicEventHandler ["MusicStop", 12];
```

*Example 3:*

```sqf
private _stopMusicEH = addMusicEventHandler ["MusicStop", {}];
// ...
removeMusicEventHandler ["MusicStop", _stopMusicEH];
```