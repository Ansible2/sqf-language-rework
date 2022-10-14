Returns hashmap of all items in units inventory as [classname, count] pairs.


---
*Syntaxes:*

`uniqueUnitItems` unit

`uniqueUnitItems` [unit, weaponsItems, uniformItems, vestItems, backpackItems, assignedItems]

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