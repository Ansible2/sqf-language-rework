Returns array of arrays of all unit's or vehicle's magazines with extended information about them. The magazines returned are for primary gunner. If you need magazines for all turrets, see `magazinesAllTurrets`.


---
*Syntaxes:*

`magazinesAmmoFull` entity

`magazinesAmmoFull` [vehicle, includeEmpty]

---
*Example 1:*

```sqf
toFixed 0; magazinesAmmoFull player;
/*
[
	["30Rnd_65x39_caseless_mag",30,false,-1,"Uniform",10000003,0],
	["Chemlight_green",1,true,0,"ChemlightGreenMuzzle",10000016,0],
	["30Rnd_65x39_caseless_mag",30,false,-1,"Vest",10000008,0],
	["30Rnd_65x39_caseless_mag",30,false,-1,"Vest",10000009,0],
	["30Rnd_65x39_caseless_mag",30,false,-1,"Vest",10000010,0],
	["HandGrenade",1,true,0,"HandGrenadeMuzzle",10000018,0],
	["HandGrenade",1,false,-1,"Vest",10000019,0],
	["30Rnd_65x39_caseless_mag",30,true,1,"arifle_MX_ACO_pointer_F",10000001,0],
	["16Rnd_9x21_Mag",16,true,2,"hgun_P07_F",10000011,0]
]
*/
```

*Example 2:*

```sqf
toFixed 0; magazinesAmmoFull Mi_48;
/*
[
	["250Rnd_30mm_HE_shells_Tracer_Green",250,true,65536,"HE",10000043,0],
	["250Rnd_30mm_APDS_shells_Tracer_Green",250,true,65536,"AP",10000044,0],
	["Laserbatteries",1,true,65536,"Laserdesignator_mounted",10000045,0],
	["PylonRack_4Rnd_LG_scalpel",4,false,-1,"",10000049,0],
	["PylonRack_19Rnd_Rocket_Skyfire",19,false,-1,"",10000051,0],
	["PylonRack_19Rnd_Rocket_Skyfire",19,false,-1,"",10000052,0],
	["PylonRack_4Rnd_LG_scalpel",4,false,-1,"",10000053,0]
]
*/
```