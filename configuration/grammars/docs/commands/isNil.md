Tests whether a variable is `nil` or undefined from its `identifier`, or whether the given expression evaluates to `nil` or `Nothing`.


---
*Syntaxes:*

`isNil` variableName

`isNil` code

---
*Example 1:*

```sqf
if (isNil "TAG_globalVariable") then { TAG_globalVariable = 0 };
if (isNil "_localVariable") then { hint "_localVariable is nil" };
```

*Example 2:*

```sqf
isNil { player getVariable "someVar" };
```

*Example 3:*

```sqf
_myArray = [0, 1];
isNil { _myArray select 0 }; // returns false
isNil { _myArray select 1 }; // returns false
isNil { _myArray select 2 }; // returns true
isNil { _myArray select 3 }; // throws a script error. only length+1 select is allowed
```

*Example 4:*

This trick forces executing something in `Unscheduled Environment`:

```sqf
0 spawn {
	systemChat str canSuspend;		// chat shows true
	isNil { hint str canSuspend };	// hint shows false
};
```

*Example 5:*

{{ofp}} `String` comparison workaround<br>
`SQS Syntax`:
<sqs>
_nil = format ["%1", _undefinedVariable]
? (format ["%1", variableToTest] == _nil) : hint "variableToTest is nil"
</sqs>

`SQF Syntax`:

```sqf
_nil = format ["%1", _undefinedVariable];
if (format ["%1", variableToTest] == _nil) then { hint "variableToTest is nil" };
```