Adds `playMusic` event handler. Returns id of the handler or -1 when failed. Like `addMissionEventHandler`, the music event handler is attached to the mission.


---
*Syntaxes:*

`addMusicEventHandler` [type, function]

---
*Example 1:*

```sqf
private _ehID = addMusicEventHandler ["MusicStart", { hint str _this }];
```

*Example 2:*

```sqf
private _ehID = addMusicEventHandler ["MusicStop", { hint str _this }];
```