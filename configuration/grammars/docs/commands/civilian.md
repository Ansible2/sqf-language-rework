Pre-defined variable for the civilian `side`.<br>
When used in a `format` statement (**hint `format`["%1",civilian]}}), the string returned is {{hl|"CIV"**.


---
*Example 1:*
`SQS`:
<sqs>? side _unit == civilian : hint "This is a civilian unit!"</sqs>

*Example 2:*
`SQF`:

```sqf
if (side _unit == civilian) then
{
	hint "This is a civilian unit!";
};
```