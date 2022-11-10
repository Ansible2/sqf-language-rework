Shows an animated text with background tiles.


---
*Syntaxes:*

[content, position, tileSize, duration, fadeInOutTime, tileTransparency] spawn `BIS_fnc_textTiles`

---
*Example 1:*

```sqf
[parseText "<t font='PuristaBold' size='1.6'>MyMission</t><br />by Username", true, nil, 7, 0.7, 0] spawn BIS_fnc_textTiles;
```

*Example 2:*

```sqf
["path\to\image.paa"] spawn BIS_fnc_textTiles;
```