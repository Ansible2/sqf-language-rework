Return the damage value of an object.


---
*Example 1:*
<sqs>? damage player > 0.1 : player groupChat "I'm hurt! Medic!" // SQS</sqs>

*Example 2:*
```sqf
if (damage player > 0.1) then
{
	player groupChat "I'm hurt! Medic!";
};
```

*Example 3:*
```sqf
private _health = (1 - damage player) * 100; // health in % from 0 to 100
```