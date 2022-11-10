Plays in-game video in GPS frame.<br>
If `BIS_fnc_customGPS` changed GPS texture, it is used.<br>
GPS GUI layer is **19**.


---
*Syntaxes:*

[path, `sizeCoef`] spawn `BIS_fnc_customGPSvideo`

---
*Example 1:*

```sqf
private _script = ["\ca\video_pmc\CP00_Reynolds_b.ogv",1.04] spawn BIS_fnc_customGPSvideo;
waitUntil {scriptDone _script};
```