Moves a unit into a vehicle cargo position (immediately and without animation).


---
*Syntaxes:*

unit `moveInCargo` vehicle

unit `moveInCargo` [vehicle, cargoIndex, canReassign]

---
*Example 1:*

```sqf
_soldierOne moveInCargo _jeepOne;
```

*Example 2:*

```sqf
_soldierOne moveInCargo [_jeepOne, 1];
```