Order the given unit(s) to follow another from his own group (`via` radio).
It can also be used to resume unit formation after e.g `doStop`.


---
*Syntaxes:*

unit `commandFollow` unitLead

---
*Example 1:*

```sqf
_soldier1 commandFollow _soldier2;
```

*Example 2:*

```sqf
(units group _leader - [_leader]) commandFollow _leader; // returns all the units (but the leader) to formation
```