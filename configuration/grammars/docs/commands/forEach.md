Executes the given command(s) on every item of an `Array` or a `HashMap`.


---
*Syntaxes:*

code `forEach` array

code `forEach` hashMap

---
*Example 1:*

```sqf
// SQF
{ _x setDamage 1 } forEach units player;
```
<sqs>
; SQS
"_x setDammage 1" forEach units player
</sqs>

*Example 2:*

This command can also easily be used to execute a single command multiple times without respect to the array items - see also `for`

```sqf
{ player addMagazine "30Rnd_556x45_Stanag" } forEach [1, 2, 3, 4];
// equivalent to
for "_i" from 1 to 4 do { player addMagazine "30Rnd_556x45_Stanag" };
```

*Example 3:*

You can also use multiple commands in the same block:

```sqf
{
	_x setCaptive true;
	removeAllWeapons _x;
	doStop _x;
} forEach units group this;
```

*Example 4:*

To get the index of a `forEach` loop, use `_forEachIndex`:

```sqf
{ systemChat str _forEachIndex; } forEach ["a", "b", "c"]; // will return: "0", "1", "2" in systemChat messages
```

*Example 5:*

Iterating a `HashMap`'s `_forEachIndex`:

```sqf
// shows "0, k1, v1", "1, k2, v2" in systemChat messages
{
	systemChat format ["%1, %2, %3", _forEachIndex, _x, _y];
} forEach createHashMapFromArray [
	["k1", "v1"],
	["k2", "v2"]
];
```

*Example 6:*

`findIf` equivalent for `HashMap`:

```sqf
private _resultKey = {
	if (_y isEqualTo "wantedValue") exitWith { _x };
	""
} forEach _hashmap;
```

*Example 7:*

Array is edited by reference:

```sqf
_arr1 = [1,2,3];
_arr2 = [6,7,8];
_arr3 = [0];
{ _x set [1, "changed"] } forEach [_arr1, _arr2, _arr3];
// _arr1 = [1, "changed", 3]
// _arr2 = [6, "changed", 8]
// _arr3 = [0, "changed"]
```

*Example 8:*

```sqf
{
	private _verticalValue = _x; // needed, otherwise _horizontalValues' _x made this one inaccessible
	{
		[_x, _verticalValue] call TAG_fnc_doSomething;
	} forEach _horizontalValues;
} forEach _verticalValues;
```