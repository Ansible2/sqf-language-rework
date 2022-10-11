The unknown `side`.
<br>Used when the side of a unit is unknown, e.g. for spotted targets with insufficient information.


---
*Example 1:*
```sqf
//soldier1 and soldier2 of different sides and out of sight
soldier1 reveal soldier2;
hint str (soldier1 nearTargets 1000);
//returns: [[[1557.96,5047.4,1.32402],"SoldierWB",UNKNOWN,0.0155183,soldier2,5]]
soldier1 reveal [soldier2,1.5];
//returns: [[[1556.52,5050.08,1.32402],"SoldierWB",WEST,0.0211193,soldier2,5]]
```