Selects a unit from player's group. If player is the leader, the effect of this command is similar to player pressing <See Controls Reference 1>, <See Controls Reference 2>, <See Controls Reference 3> etc to highlight units in his squad, after which the unit command menu is shown.
If leader is AI, player will get usual communication menu to interact with the leader.


---
*Syntaxes:*

player `groupSelectUnit` [unit, select]

---
*Example 1:*

After leaving menu, deselect all units (command menu is not opened → no selection)

```sqf
{
	player groupSelectUnit [_x, false];
} forEach (groupSelectedUnits player);
```

*Example 2:*

Select all units when player is the leader:

```sqf
{
	player groupSelectUnit [_x, true];
} forEach units player;
```

*Example 3:*

Open communication with group leader:

```sqf
player groupSelectUnit [leader player, true];
```