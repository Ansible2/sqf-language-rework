Remove an item from the `Arma_3_Communication_Menu|communication menu`.


---
*Syntaxes:*

[owner,itemID] call `BIS_fnc_removeCommMenuItem`

---
*Example 1:*

```sqf
[player, 2] call BIS_fnc_removeCommMenuItem;
```

*Example 2:*

```sqf
private _supportHeli = [player, "Support_Request_CAS_Heli"] call BIS_fnc_addCommMenuItem;
[player, _supportHeli] call BIS_fnc_removeCommMenuItem;
```