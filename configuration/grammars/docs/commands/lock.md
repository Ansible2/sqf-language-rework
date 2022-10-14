Lock vehicle (disable mounting / dismounting) for player.
This command will remove user get in/get out actions but will not stop player getting into or out of vehicle via script commands (e.g `moveInCargo`).


---
*Syntaxes:*

vehicleName `lock` locked

vehicleName `lock` lockstate

---
*Example 1:*

```sqf
_jeepOne lock true;
```

*Example 2:*

```sqf
heli lock true;
locked heli; // 2

heli lock false;
locked heli; // 0

heli lock 1;
locked heli; // 1
```