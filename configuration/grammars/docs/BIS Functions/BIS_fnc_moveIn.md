Moves a unit into vehicle. Compatible with `assignedVehicleRole` output.


---
*Syntaxes:*

[vehicle, unit, role] call `BIS_fnc_moveIn`

---
*Example 1:*

```sqf
[myCar, player, "cargo"] call BIS_fnc_moveIn;
```

*Example 2:*

```sqf
[myTank, player, ["turret", [0]]] call BIS_fnc_moveIn;
```

*Example 3:*

```sqf
[myTank, player, ["turret", -1]] call BIS_fnc_moveIn; // will moveInDriver the player
```