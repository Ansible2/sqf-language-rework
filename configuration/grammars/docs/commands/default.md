Defines a `Switch Type` default case - does `not` need a colon to define its block. See `switch` for more information.


---
*Example 1:*
```sqf
switch (_condition) do
{
	case 1: { hint "1" };
	case 2: { hint "2" };
	default { hint "default" }; // no colon after default
};
```