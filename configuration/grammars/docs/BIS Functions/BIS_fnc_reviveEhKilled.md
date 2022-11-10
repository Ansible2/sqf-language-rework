Should be called from Killed event handler. Handles what happens if unit dies if revive system is enabled.


---
*Syntaxes:*



---
*Example 1:*

```sqf
BIS_unit addEventHandler ["Killed", 
{
 _this call BIS_fnc_reviveEhKilled;
}];
```