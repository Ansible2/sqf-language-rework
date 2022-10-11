Pre-defined variable for the eastern `side`.


---
*Example 1:*
`SQS`:
<sqs>? side _unit == east : hint "This is an eastern unit!"</sqs>

*Example 2:*
`SQF`:

```sqf
if (side _unit == east) then
{
	hint "This is an eastern unit!";
};
```