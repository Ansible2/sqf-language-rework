Returns `true` only if one or both conditions are `true`. In case of the alternative syntax, {{Wikipedia|Lazy_evaluation#Control_structures|lazy evaluation}} is used (if left operand is `true`, evaluation of the right side is skipped completely).


---
*Example 1:*
```sqf
if (OBJ1 || _enemycount == 0) then { hint "you win !" };
```

*Example 2:*
```sqf
if (count _array == 0 || { (_array select 0) != player }) then
{
	hint "It works! Without lazy evaluation it would throw an error if array was empty.";
};
```