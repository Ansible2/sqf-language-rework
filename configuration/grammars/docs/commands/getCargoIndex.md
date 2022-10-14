Returns index of the unit in cargo. -1 if not in cargo.


---
*Syntaxes:*

vehicle `getCargoIndex` unit

---
*Example 1:*

```sqf
player moveInCargo heli;
hint str (heli getCargoIndex player);
```