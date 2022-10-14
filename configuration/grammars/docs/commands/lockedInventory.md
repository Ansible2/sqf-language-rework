Get a vehicle's inventory lock state. Can also be used on a unit's backback (see `lockInventory`).


---
*Syntaxes:*

`lockedInventory` vehicle

---
*Example 1:*

```sqf
private _isInventoryLocked = lockedInventory vehicle player;
```

*Example 2:*

```sqf
private _isBackpackLocked = lockedInventory backpackContainer player;;
```