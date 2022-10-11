Increases or decreases the rope length by the given amount. Use relative parameter for changing rope length +/- from current length.


---
*Example 1:*
```sqf
ropeUnwind [ropes heli1 select 0, 3, 10]; // set rope length to 10m at 3m/s
```

*Example 2:*
```sqf
ropeUnwind [ropes heli1 select 0, 3, -5, true]; // decrease rope length by 5m at 3m/s
```