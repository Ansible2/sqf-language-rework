Lock or unlock a vehicle's inventory access.
This command can also lock backpack a unit is wearing to prevent access by a third party.
If set to `true` (locked), the inventory cannot be accessed `via` hotkey or action menu.


---
*Syntaxes:*

vehicle `lockInventory` lock

---
*Example 1:*

```sqf
vehicle player lockInventory true;
```

*Example 2:*

```sqf
backpackContainer player lockInventory true;
```