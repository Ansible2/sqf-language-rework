Return a list of all groups created on the following sides `east`, `west`, `resistance`/`independent` and `civilian` only. Does not contain groups of `sideLogic`.


---
*Syntaxes:*

`allGroups`

---
*Example 1:*

```sqf
{ leader _x sideChat "Go ! Go ! Go !" } forEach allGroups;
```

*Example 2:*

All groups with players:

```sqf
private _allGroupsWithPlayers = [];
{ _allGroupsWithPlayers pushBackUnique group _x } forEach allPlayers;
```