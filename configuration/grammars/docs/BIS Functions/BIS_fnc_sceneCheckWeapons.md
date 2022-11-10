Checks if participants have not missing weapon or have not it selected before scene<br>Function works as a toggle:
* 1st run of script: running in SETUP mode - sets correct weapons for scene
* 2nd run of script: running in RESTORE mode - restore origin weapons(delete weapons after scene if character hadn't any)


---
*Syntaxes:*

[participants] call `BIS_fnc_sceneCheckWeapons`

---
*Example 1:*

```sqf
[
	[BIS_Cooper, "primary"],
	[BIS_Ohara, "primary"],
	[BIS_Rodriguez, "primary"],
	[BIS_Sykes, "primary"],
	[BIS_Miles, "primary"]
] call BIS_fnc_sceneCheckWeapons;
```