Repeats `Code` while the given condition is `true`. A part of `while`-`do` construct.


---
*Syntaxes:*

`while` condition

---
*Example 1:*

```sqf
while { a < b } do { a = a + 1 };
```

*Example 2:*

A practical example: Repair all members of a group to such a level that they are able to stand up:

```sqf
{
	if (alive _x) then
	{
		while { not canStand _x } do
		{
			_x setDamage (damage _x - 0.01);
		};
	};
} forEach units group unitname;
```

*Example 3:*

```sqf
[] spawn {
	// warning: while loop without suspension executes multiple times per frame
	private _counter = 0;
	private _endTime = diag_tickTime + 5;
	private _frameNo = diag_frameNo;
	while { diag_tickTime < _endTime } do
	{
		_counter = _counter + 1;
	};
	// in an empty mission, the _counter may go well over 2000 times per frame!
	hint format ["Average Execution: %1 times per frame", _counter / (diag_frameNo - _frameNo)];

	// with suspension
	private _counter = 0;
	private _endTime = diag_tickTime + 5;
	private _frameNo = diag_frameNo;
	while { diag_tickTime < _endTime } do
	{
		_counter = _counter + 1;
		uiSleep 0.001; // waits at least 1 frame
	};
	// _counter says one per frame, as expected
	hint format ["Average Execution: %1 times per frame", _counter / (diag_frameNo - _frameNo)];
};
```