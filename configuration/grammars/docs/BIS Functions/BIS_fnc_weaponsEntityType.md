Return object's weapons as defined in config. Scans also turrets and pylons.


---
*Syntaxes:*

class call `BIS_fnc_weaponsEntityType`

---
*Example 1:*

```sqf
["B_Soldier_GL_F"] call BIS_fnc_weaponsEntityType;
// returns e.g ["arifle_MX_GL_ACO_F","hgun_P07_F","Throw","Put"]
```

*Example 2:*

```sqf
"B_Plane_CAS_01_dynamicLoadout_F" call BIS_fnc_weaponsEntityType;
/*
	returns e.g
	[
		"Gatling_30mm_Plane_CAS_01_F",
		"Laserdesignator_pilotCamera",
		"CMFlareLauncher",
		"Missile_AA_04_Plane_CAS_01_F",
		"Rocket_04_HE_Plane_CAS_01_F",
		"Missile_AGM_02_Plane_CAS_01_F",
		"Bomb_04_Plane_CAS_01_F",
		"Rocket_04_AP_Plane_CAS_01_F"
	]
*/
```