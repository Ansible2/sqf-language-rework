Returns the list of object or model `LOD`s.


---
*Example 1:*
```sqf
allLODs player;
/*
	[
		[0,"1",1,91],
		[1,"2",2,91],
		[2,"3",3,84],
		[3,"4",4,43],
		[4,"5",5,34],
		[5,"VIEW_PILOT",1100,89],
		[6,"shadow(0)",10000,80],
		[7,"shadow(10)",10010,33],
		[8,"geometry",1e+013,42],
		[9,"memory",1e+015,55],
		[10,"landContact",2e+015,0],
		[11,"hitpoints",5e+015,33],
		[12,"geometryView",6e+015,19],
		[13,"geometryFire",7e+015,57],
		[14,"shadow(1000)",11000,80],
		[15,"shadow(1010)",11010,33]
	]
*/
```

*Example 2:*
```sqf
allLODs getText (configFile >> "CfgWeapons" >> "arifle_MX_F" >> "model");
/*
	[
		[0,"1",1,17],
		[1,"2",2,17],
		[2,"3",3,16],
		[3,"4",4,14],
		[4,"5",5,12],
		[5,"6",6,9],
		[6,"VIEW_PILOT",1100,16],
		[7,"shadow(0)",10000,2],
		[8,"shadow(10)",10010,0],
		[9,"geometry",1e+013,0],
		[10,"geometrySimple",2e+013,0],
		[11,"memory",1e+015,13],
		[12,"geometryView",6e+015,2],
		[13,"shadow(1000)",11000,2],
		[14,"shadow(1010)",11010,0]
	]
*/
```