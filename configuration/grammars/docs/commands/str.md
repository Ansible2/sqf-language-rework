Converts any value into a string by placing " and " around the argument. When used on object, object debug name is returned.


---
*Syntaxes:*

`str` value

---
*Example 1:*

```sqf
_s = str (5 + 2); // The value of _s is the string "7"
```

*Example 2:*

```sqf
a = [];
ac = 0;
while { ac < 5 } do
{
	ac = count a;
	a set [ac, format ["Index %1", ac]];
};
hintSilent str a; // hints all of ["Index 0","Index 1","Index 2","Index 3","Index 4"] including brackets, quotes and commas
```

*Example 3:*

```sqf
str [0, 0, 0] == "[0, 0, 0]";	// false
str [0, 0, 0] == "[0,0,0]";		// true

str "";				// """"""
count str "";		// 2
str text "";		// ""
count str text "";	// 0
```

*Example 4:*

```sqf
str objNull;		// "<NULL-object>"
str player;			// e.g "B Alpha 1-1:1 (PlayerName)"
player setVehicleVarName "PlayerUnit";
str player;			// e.g "PlayerUnit"
```