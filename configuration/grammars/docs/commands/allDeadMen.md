Return a list of dead units including agents. Dead unit might be inside vehicle.


---
*Syntaxes:*

`allDeadMen`

---
*Example 1:*

```sqf
{ deleteVehicle _x } forEach allDeadMen;
```