Adds a backpack to a unit (even non-local).


---
*Syntaxes:*

unit `addBackpackGlobal` backpack

---
*Example 1:*

```sqf
player addBackpackGlobal "B_AssaultPack_khk";
```

*Example 2:*

```sqf
_unit spawn 
{
	if (!isNull backpackContainer _this) then
	{
		removeBackpackGlobal _this;
		waitUntil { isNull backpackContainer _this };
	};
	_this addBackpackGlobal "B_AssaultPack_khk";
	waitUntil { !isNull backpackContainer _this };
	backpackContainer _this addMagazineCargoGlobal ["30Rnd_556x45_Stanag",5];
};
```