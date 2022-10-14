Returns `true` only if both conditions are `true`.
In case of the alternative syntax, {{Wikipedia|Lazy_evaluation#Control_structures|lazy evaluation}} is used - if left operand is `false`, evaluation of the right side is ignored.


---
*Syntaxes:*

booleanA `&&` booleanB

boolean `&&` code

---
*Example 1:*

```sqf
private _allEnemiesKilled = true;
if (alive player && _allEnemiesKilled) then
{
	hint "you win !";
};
```

*Example 2:*

```sqf
if ((count _array > 0) && { (_array select 0) == player }) then // an error would be thrown without lazy evaluation
{
	hint "It works!";
};
```

*Example 3:*

```sqf
if ((alive player) && { player setDamage 0.5; true }) then // valid AS LONG AS the code block returns a Boolean
{
	hint "It works!";
};
```