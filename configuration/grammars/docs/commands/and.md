Returns `true` only if both conditions are `true`.
In case of the alternative syntax, {{Wikipedia|Lazy_evaluation#Control_structures|lazy evaluation}} is used - if left operand is `false`, evaluation of the right side is ignored.


---
*Example 1:*
```sqf
if ((not isNull player) and (alive player) and (_enemycount == 0)) then
{
	hint "you win !";
};
```

*Example 2:*
```sqf
if ((count _array > 0) and { (_array select 0) == player }) then	// works as expected
{
	hint "It works!";
};

if ((count _array > 0) and (_array select 0) == player) then		// Error: _array select 0 is evaluated
{
	hint "It... works?";
};
```