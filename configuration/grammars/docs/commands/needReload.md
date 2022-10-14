Return how much vehicle wants to reload its weapons.


---
*Syntaxes:*

`needReload` vehicle

---
*Example 1:*

```sqf
_seriousness = needReload _vehicle;
```

*Example 2:*

```sqf
if (needReload player == 1) then { reload player };
```