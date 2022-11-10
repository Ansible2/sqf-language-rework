Should be excuted by HandleDamage event handler. See example. Handles damage calculation.


---
*Syntaxes:*



---
*Example 1:*

```sqf
BIS_unit addEventHandler ["HandleDamage", 
{
	_this call BIS_fnc_reviveEhHandleDamage;
}];
```