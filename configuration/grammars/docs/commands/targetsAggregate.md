Aggregate candidates.


---
*Example 1:*
```sqf
_aggregation = [player, sideEnemy, "", [], 0] targetsAggregate (player targetsQuery [objNull, sideUnknown, "", [], 0]);
/*
	returns e.g
	[
		[
			["COUNT0", 1],
			["SIDE0", WEST],
			["UNIT0", "B_Soldier_F"],
			["PLACE0", [[<null>,<null>], 0, <null>]],
			["TIME0", [-0.9, -0.9]],
			["UCOUNT0", 1],
			["UTYPE0", ...
		]
	]
*/
```
with e.g
* one Orca Helicopter
* one T-100 Varsuk tank
* one T-140K Angara tank
* one MBT-52 Kuma tank (independent, set as enemy to blufor)

```sqf
/*
	[
		[["COUNT0",1],["SIDE0",EAST],["UNIT0","O_Heli_Light_02_dynamicLoadout_F"],["PLACE0",[[<null>,<null>],0,<null>]],["TIME0",[-0.982,-0.982]],["UCOUNT0",1],["UTYPE0","O_Heli_Light_02_dynamicLoadout_F"]],
		[["COUNT1",1],["SIDE1",GUER],["UNIT1","I_MBT_03_cannon_F"],["PLACE1",[[<null>,<null>],0,<null>]],["TIME1",[-0.982,-0.982]],["UCOUNT1",1],["UTYPE1","I_MBT_03_cannon_F"]],
		[["COUNT2",2],["SIDE2",EAST],["UNIT2","*Tank_F"],["PLACE2",[[<null>,<null>],4.34554,<null>]],["TIME2",[-0.982,-0.982]],["UCOUNT2",2],["UTYPE2","*O_MBT_02_cannon_F"]]]
	[
		[["COUNT0",1],["SIDE0",EAST],["UNIT0","O_Heli_Light_02_dynamicLoadout_F"],["PLACE0",[[<null>,<null>],0,<null>]],["TIME0",[-1,-1]],["UCOUNT0",1],["UTYPE0","O_Heli_Light_02_dynamicLoadout_F"]],
		[["COUNT1",1],["SIDE1",GUER],["UNIT1","I_MBT_03_cannon_F"],["PLACE1",[[<null>,<null>],0,<null>]],["TIME1",[-1,-1]],["UCOUNT1",1],["UTYPE1","I_MBT_03_cannon_F"]],
		[["COUNT2",2],["SIDE2",EAST],["UNIT2","*Tank_F"],["PLACE2",[[<null>,<null>],4.34565,<null>]],["TIME2",[-1,-1]],["UCOUNT2",2],["UTYPE2","*O_MBT_02_cannon_F"]]
	]
*/
```