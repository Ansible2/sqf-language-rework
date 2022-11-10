Return object's magazines as defined in config. Scans also turrets and pylons.


---
*Syntaxes:*

class call `BIS_fnc_magazinesEntityType`

---
*Example 1:*

```sqf
"O_MBT_04_cannon_F" call BIS_fnc_magazinesEntityType;
//Returns ["20Rnd_125mm_APFSDS_T_Green","12Rnd_125mm_HEAT_T_Green","12Rnd_125mm_HE_T_Green","1000Rnd_762x51_Belt_Green","1000Rnd_762x51_Belt_Green","500Rnd_127x99_mag_Tracer_Yellow","SmokeLauncherMag"]
```