Sets given music track event handler. Will overwrite other music event handlers.


---
*Syntaxes:*

`setMusicEventHandler` [type, function]

---
*Example 1:*

```sqf
_ehID = setMusicEventHandler ["MusicStart", "hint str _this"];
```

*Example 2:*

```sqf
_ehID = setMusicEventHandler ["MusicStop", "hint str _this"];
```