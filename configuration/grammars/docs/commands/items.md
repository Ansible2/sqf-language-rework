Returns an array of names of all unit's stored items, including `weapons` but excluding `magazines` (see `itemsWithMagazines`) and `assignedItems`.


---
*Syntaxes:*

`items` unit

---
*Example 1:*

```sqf
_itemsPlayer = items player;
```

*Example 2:*

```sqf
player sideChat format ["%1", items player];
```