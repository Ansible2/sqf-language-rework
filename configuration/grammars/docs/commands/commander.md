In {{ofp}} it returns the commander of a vehicle. Since {{arma1}} it returns the primary observer. The commander of a vehicle can be found with `effectiveCommander`.


---
*Syntaxes:*

`commander`  vehicle

---
*Example 1:*

```sqf
moveOut commander _tank;
```

*Example 2:*

Detect if player is in commander turret of a vehicle:

```sqf
_isVehicleCommander = player isEqualTo commander objectParent player;
```