Displays the given subtitles at the correctly defined moments. Each array added to the parameters represents one subtitle.


---
*Syntaxes:*

[subtitleDetail1, subtitleDetail2, ...] spawn `BIS_fnc_EXP_camp_playSubtitles`

---
*Example 1:*

```sqf
[
	["CROSSROAD", "Mission is a go, I repeat, mission is a go! Crossroad, out.", 0]
] spawn BIS_fnc_EXP_camp_playSubtitles; // Shows a subtitle immediately
```

*Example 2:*

```sqf
[
	["Speaker1", "Subtitle1", 0],
	["Speaker2", "Subtitle2", 5],
	["Speaker3", "Subtitle3", 10],
	["Speaker4", "Subtitle5", 15]
] spawn BIS_fnc_EXP_camp_playSubtitles; // Displays 4 subtitles with 5 seconds between them
```