Selects an element from an array, config entry from `Config` or substring from a string or a range from an array.


---
*Syntaxes:*

array `select` index

array `select` boolean

config `select` index

string `select` [start, length]

array `select` [start, count]

array `select` expression

---
*Example 1:*

```sqf
["a", "b", "c", "d"] select 2;	// result is "c"
position player select 2;		// result is Z coordinate of player position
```

*Example 2:*

```sqf
["", currentWeapon player] select alive player; // if player is dead, "" is selected
```

*Example 3:*

```sqf
(configFile >> "cfgVehicles" >> typeOf vehicle player >> "Turrets") select 0 >> "gunnerAction";
```

*Example 4:*

```sqf
hint str ("japa is the man!" select [8]);		// the man!
hint str ("japa is the man!" select [0, 7]);	// japa is
```

*Example 5:*

```sqf
hint str ([1,2,3,4,5,6] select [1, 4]); // [2,3,4,5]
```

*Example 6:*

```sqf
_even = [1,2,3,4,5,6,7,8,9,0] select { _x % 2 == 0 }; // returns [2, 4, 6, 8, 0]
```

*Example 7:*

JavaScript endsWith() alternative:

```sqf
private _fnc_endsWith = 
{
	params ["_string", "_endswith"];
	_string select [count _string - count _endswith] isEqualTo _endswith
};

["Arma 3", "3"] call _fnc_endsWith; // true
["Arma 3", "4"] call _fnc_endsWith; // false
```