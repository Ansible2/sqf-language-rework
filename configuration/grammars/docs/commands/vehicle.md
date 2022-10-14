Vehicle in which given unit is mounted. If none, unit is returned. Alternatively, use `objectParent`


---
*Syntaxes:*

`vehicle` unitName

---
*Example 1:*

SQS
<sqs>? vehicle player != player : hint "Player is in a vehicle"</sqs>

*Example 2:*

SQF

```sqf
if (vehicle player != player) then { hint "Player is in a vehicle" };
```