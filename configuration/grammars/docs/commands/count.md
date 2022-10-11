Can be used to count:
* The number of elements in an array (returns the already internally known array size)
* The number of elements in an array matching the condition
* The number of sub-entries in a config entry
* {{GVI|arma3|1.28


---
*Example 1:*
```sqf
count [0, 0, 1, 2]; // returns 4
count units group player; // returns number of units in player group
```

*Example 2:*
```sqf
private _cnt = { _x == 4 } count [1, 9, 8, 3, 4, 4, 4, 5, 6]; // returns 3
_cnt = { alive _x } count allUnits; // returns the number of alive units
```

*Example 3:*
```sqf
private _cnt = count (configFile >> "CfgVehicles");
```

*Example 4:*
```sqf
hint str count "japa is the man!"; // 16
```

*Example 5:*
```sqf
if (count _myHashMap < 1) then { hint "empty hashmap!"; };
```