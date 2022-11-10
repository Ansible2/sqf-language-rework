Create a building ruin and hide the original object.


---
*Syntaxes:*

building call `BIS_fnc_createRuin`

---
*Example 1:*

```sqf
aBuilding call BIS_fnc_createRuin;
```

*Example 2:*

```sqf
// will destroy every building in a 50m radius around the player
private _nearBuildings = player nearObjects ["House", 50];
{ _x call BIS_fnc_createRuin } forEach _nearBuildings;
```