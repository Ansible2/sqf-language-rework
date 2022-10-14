Skips all loop interations.


---
*Syntaxes:*

`break`

---
*Example 1:*

```sqf
// prints 0, 1 and then exits
for "_i" from 0 to 3 do
{
	if (_i == 2) then { break };
	systemChat str _i;
};
```