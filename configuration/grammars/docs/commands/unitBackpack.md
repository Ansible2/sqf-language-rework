Returns unit's backpack


---
*Syntaxes:*

`unitBackpack` unit

---
*Example 1:*

```sqf
private _myBackpack = unitBackpack player;
```

*Example 2:*

```sqf
clearMagazineCargo unitBackpack player;
```

*Example 3:*

```sqf
player action ["gear", unitBackpack player];
```