Returns hashmap of all items in units inventory as [classname, count] pairs.
{{Feature|informative|
* `weaponItems`, `uniformItems`, `vestItems`, `backpackItems` arguments use the following `Number` values:
** 0: do not return value
** 1: returns container only (weapon or container)
** 2: returns container and its content
* weapons/containers that are stored inside containers (e.g weapon in backpack) always return all contents if contents for the parent container are enabled.


---
*Example 1:*
```sqf
private _unitUniqueItems = uniqueUnitItems [player, 0, 2, 2, 2, true];
if (_unitUniqueItems getOrDefault ["FirstAidKit", 0] > 5) then { hint "I'm rich of FAK to give!"; };
```

*Example 2:*
```sqf
private _unitUniqueItems = uniqueUnitItems [cursorObject];
```