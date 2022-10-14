Returns the driver of a vehicle.


---
*Syntaxes:*

`driver` vehicle

---
*Example 1:*

```sqf
(driver _tank) action ["getout", _tank];
```

*Example 2:*

```sqf
driver vehicle player isEqualTo player // check if player is driver of current vehicle
```