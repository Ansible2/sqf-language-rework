Unassigns and deletes all linked items from inventory.
The commands operates on `assignedItems` array, which does not include goggles or headgear.<br>
Use `removeGoggles` and `removeHeadgear` for those.


---
*Syntaxes:*

`removeAllAssignedItems` unit

---
*Example 1:*

```sqf
removeAllAssignedItems player;
```