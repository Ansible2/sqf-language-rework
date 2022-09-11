Checks whether value is in array, unit is in vehicle, position is inside location or ANSI string is part of other ANSI string. If Unicode support is desired, see `forceUnicode`.

NOTE: *String comparison is case-sensitive*

Example 1:
```sqf
// value in array
1 in [0, 1, 2];
// true - Arma 3 only 
[1,2,3] in [[1,2,3], [4,5,6]]; 

// unit in vehicle
private _isInCar = player in Car;

// position in location
private _isInside = [1000,2000,0] in MyLocation;

// not in vehicle
private _onFoot = _unit in _unit;

// string checking
private _isInString = "foo" in "foobar"; // true
_isInString = "Foo" in "foobar"; // false
```