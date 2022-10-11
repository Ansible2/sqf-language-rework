Returns the formation leader of a given unit.
This is often the same as the group leader, but not always, for example in cases when a unit is ordered to follow another unit.


---
*Example 1:*
```sqf
if (formLeader player != leader player) then
{
	hint "The formation leader is different to the group leader!";
};
```