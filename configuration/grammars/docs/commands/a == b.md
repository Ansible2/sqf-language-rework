Check if `a` is equal to `b`. String comparison is case-`in`sensitive  - use `isEqualTo` if case sensitivity is needed.


---
*Syntaxes:*

a `==` b

---
*Example 1:*

```sqf
if (player == leader group player) then
{
	hint "You are the leader of your group.";
}
else
{
	hint "Someone else is the boss";
};
```

*Example 2:*

```sqf
"MyRabbit" == "MYRABBIT"; // returns true
```

*Example 3:*

```sqf
if (alive _unit1 == alive _unit2) then { hint "Both units are either dead or both alive" };
```