Selects an element from an array, config entry from Config or substring from a string or a range from an array.

NOTE: *Substring version of `select` operates with ANSI charset, if Unicode support is desired, see `forceUnicode`.*
NOTE: *When `select` index == size of the array, there is no error for out of range selection and `nil` is returned.*

```sqf
["a", "b", "c", "d"] select 2;	// result is "c"
position player select 2;		// result is Z coordinate of player position
```

```sqf
["", currentWeapon player] select alive player; // if player is dead, "" is selected
```

```sqf
(configFile >> "cfgVehicles" >> typeOf vehicle player >> "Turrets") select 0 >> "gunnerAction";
```

```sqf
hint str ("japa is the man!" select [8]);		// the man!
hint str ("japa is the man!" select [0, 7]);	// japa is
```

```sqf
hint str ([1,2,3,4,5,6] select [1, 4]); // [2,3,4,5]
```

```sqf
_even = [1,2,3,4,5,6,7,8,9,0] select { _x % 2 == 0 }; // returns [2, 4, 6, 8, 0]
```

JavaScript endsWith() alternative:
```sqf
private _fnc_endsWith =
{
	params ["_string", "_endswith"];
	_string select [count _string - count _endswith] isEqualTo _endswith
};

["Arma 3", "3"] call _fnc_endsWith; // true
["Arma 3", "4"] call _fnc_endsWith; // false
```