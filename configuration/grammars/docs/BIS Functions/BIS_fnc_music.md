Randomly play provided tracks defined in `CfgMusic` and does a 3 seconds `fade out`. This function takes `accTime` into account. See also `BIS_fnc_jukebox`.


---
*Syntaxes:*

[tracklist, delay] call `BIS_fnc_music`

---
*Example 1:*

```sqf
[["myMusic1", "myMusic2"], 1] call BIS_fnc_music;
```

*Example 2:*

```sqf
[] call BIS_fnc_music; // will play all game tracks
```