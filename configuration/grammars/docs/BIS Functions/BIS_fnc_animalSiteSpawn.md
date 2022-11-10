Create an area that spawns animals. The animals will be created or deleted if a player is inside or outside the area's radius.


---
*Syntaxes:*

[animalSite, classnamesToSpawn, radius] call `BIS_fnc_animalSiteSpawn`

---
*Example 1:*

```sqf
[player, ["rabbit_f", "turtle_f", "hen_random_f"], 200] call BIS_fnc_animalSiteSpawn;
```