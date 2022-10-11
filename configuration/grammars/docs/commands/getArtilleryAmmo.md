Get list of all available magazines of artillery units on the list. Command returns only unique magazine types and doesn't contain any information about which unit has which magazine.


---
*Example 1:*
```sqf
if ("8Rnd_82mm_Mo_Flare_white" in getArtilleryAmmo [
	_mortar1,
	_mortar2,
	_mortar3, 
	_mortar4
]) then
{
	hint "Sir, we have white flares, Sir!";
};
```