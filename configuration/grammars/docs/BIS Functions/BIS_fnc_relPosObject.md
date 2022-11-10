Place an object relative to another object, like a `setRelPos` command.


---
*Syntaxes:*

[parent, child, relPos, direction] call `BIS_fnc_relPosObject`

---
*Example 1:*

```sqf
[BIS_briefingTable, BIS_map, [0, -0.58, 0.857], 98] call BIS_fnc_relPosObject;
```