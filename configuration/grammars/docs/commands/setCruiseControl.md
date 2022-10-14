Limits or sets ``local` `player`-controlled` vehicle's speed through cruise control.


---
*Syntaxes:*

vehicle `setCruiseControl` [speed, autoThrust]

---
*Example 1:*

```sqf
vehicle player setCruiseControl [50, true]; // sets cruise control to 50 km/h
```

*Example 2:*

```sqf
vehicle player setCruiseControl [5, false]; // limits player's vehicle speed to 5 km/h
```