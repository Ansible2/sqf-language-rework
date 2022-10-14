See `switch`


---
*Syntaxes:*

a `:` b

---
*Example 1:*

<sqs>? (_var == _test) : hint "_var is equal to _test!";</sqs>

*Example 2:*

```sqf
switch (_condition) do
{
	case 1: { hint "1" };
	case 2: { hint "2" };
	default { hint "default" }; // note: NO colon for the default case
};
```