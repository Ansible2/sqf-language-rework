West (BLUFOR) `side`.


---
*Example 1:*
`SQS Syntax`:
<sqs>? side _unit == west : hint "This is a western unit!"</sqs>

*Example 2:*
`SQF Syntax`:

```sqf
if (side _unit == west) then
{
	hint "This is a western unit!";
};
```