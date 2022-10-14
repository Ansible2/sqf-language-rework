Returns `true` if one or both conditions are `true`. In case of the alternative syntax, {{Wikipedia|Lazy_evaluation#Control_structures|lazy evaluation}} is used. That means that if left operand is `true`, evaluation of the right side is skipped completely.


---
*Syntaxes:*

a `or` b

a `or` b

---
*Example 1:*

```sqf
if (_obj1 or (_enemycount == 0) or (not alive _enemyGeneral)) then { hint "you win !"; };
```

*Example 2:*

```sqf
// without lazy evaluation, select would throw an error in the event of an empty array
if ((count _array == 0) or { (_array select 0) != player }) then
{
	hint "It works!";
};
```