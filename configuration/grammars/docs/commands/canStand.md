Returns if the given soldier is able to stand up. It only checks for the unit's legs and not its alive/dead status - it can return `true` for a dead unit.


---
*Syntaxes:*

`canStand` unit

---
*Example 1:*

`SQS`:
<sqs>? (not canStand player) : player groupChat "My legs! They hit my legs!"</sqs>

*Example 2:*

```sqf
if (not canStand player) then
{
	player groupChat "My legs! They hit my legs!";
};
```