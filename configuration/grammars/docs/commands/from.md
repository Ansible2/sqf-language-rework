Continue sequence of `for` construct. It sets the start value of the index variable.


---
*Syntaxes:*

for `from` b

---
*Example 1:*

```sqf
for "_i" from 10 to 20 do
{
	hint str _i; // will hint from 10 to 20, spaced by 1 second
	sleep 1;
};
```