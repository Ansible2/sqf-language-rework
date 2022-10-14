[[Image:bellcurve.jpg|thumb|120px|[[#Syntax 2|Syntax&nbsp;2]]'s distribution]]


---
*Syntaxes:*

`random` x

`random` [min, mid, max]

seed `random` x

seed `random` [x, y]

---
*Example 1:*

```sqf
_rNumber = random 1;
```

*Example 2:*

```sqf
_rNumber = random -10;
```

*Example 3:*

Generate a random position inside a circle (see also `Example Code: Random Area Distribution`)

```sqf
_center getPos [_radius * sqrt random 1, random 360];
```

*Example 4:*

Select a random value from an array:

```sqf
_array = ["apples", "pears", "bananas", "M16"];

_random = _array select floor random count _array;	// Before Arma 2
_random = _array call BIS_fnc_selectRandom;			// Since Arma 2
_random = selectRandom _array;						// Since Arma 3 v1.56
```