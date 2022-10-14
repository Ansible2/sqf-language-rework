Checks whether value is in array, unit is in vehicle, position is inside location or ANSI string is part of other ANSI string. If Unicode support is desired, see `forceUnicode`.


---
*Syntaxes:*

value `in` array

unit `in` vehicle

position `in` location

needle `in` haystack

key `in` hashMap

---
*Example 1:*

```sqf
1 in [0, 1, 2]; // true
```

*Example 2:*

```sqf
private _myArray = ["Aaa", "AAa", "AAA"];

"aaa" in _myArray; // false
"AAa" in _myArray; // true

// Case-insensitive alternatives:
_myArray findIf { _x == "aaa"; } != -1; // true

({
	if (_x == "aaa") exitWith { _forEachIndex };
	-1
} forEach _myArray) != -1; // true, less performant but valid before the introduction of the findIf command

{ if (_x == "aaa") exitWith { 1 } } count _myArray > 0; // true

{ _x == "aaa"; } count _myArray > 0; // true, worst performance, only option available in OFP
```

*Example 3:*

```sqf
[1,2,3] in [[1,2,3], [4,5,6]]; // true - Arma 3 only
```

*Example 4:*

```sqf
private _isInCar = player in Car;
```

*Example 5:*

```sqf
private _isInside = [1000,2000,0] in MyLocation;
```

*Example 6:*

```sqf
private _isInString = "foo" in "foobar"; // true
_isInString = "Foo" in "foobar"; // false
```

*Example 7:*

```sqf
private _onFoot = _unit in _unit;
```
Other options:

```sqf
private _onFoot = vehicle _unit == _unit;
```

```sqf
private _onFoot = isNull objectParent _unit;
```