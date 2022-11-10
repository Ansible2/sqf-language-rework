Returns `true` if object contains given item in inventory / cargo storage.


---
*Syntaxes:*

[object, item, searchCrew] call `BIS_fnc_hasItem`

---
*Example 1:*

```sqf
[player, "ItemMap"] call BIS_fnc_hasItem;
```

*Example 2:*

```sqf
[tank, "FirstAidKit", true] call BIS_fnc_hasItem;
```