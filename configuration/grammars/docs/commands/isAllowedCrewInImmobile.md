Whether or not units can be in a vehicle with broken tracks/wheels.


---
*Syntaxes:*

`isAllowedCrewInImmobile` vehicle

---
*Example 1:*

```sqf
if !(isAllowedCrewInImmobile _tank) then
{
	_tank allowCrewInImmobile true;
};
```