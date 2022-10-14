Attempts to sort given array either in ascending (`true`) or descending (`false`) order.


---
*Syntaxes:*

array `sort` order

---
*Example 1:*

```sqf
_arr = [5.21725,1.30859,4,5.03028,1];
_arr sort true;
hint str _arr; //[1,1.30859,4,5.03028,5.21725]
```

*Example 2:*

```sqf
_dev = ["ja","pa","pa","tram","tara"];
_dev sort false;
hint str _dev; //["tram","tara","pa","pa","ja"]
```

*Example 3:*

```sqf
#define ASC true
#define DESC false
_scores = [[123,"bob",15],[123,"bill",20],[200,"dave",21],[200,"steve",11]];
_scores sort DESC;
hint str _scores; //[[200,"steve",11],[200,"dave",21],[123,"bob",15],[123,"bill",20]]
```

*Example 4:*

Sort buildings by distance and return position of the most distant building:

```sqf
_buildings = player nearObjects ["Land_Cargo_Patrol_V1_F", 500];
_buildings = _buildings apply { [_x distance player, _x] };
_buildings sort false;
hint format [
	"Most distant building is at %1, distance %2 m", 
	getPos (_buildings select 0 select 1),
	round (_buildings select 0 select 0)
];
```