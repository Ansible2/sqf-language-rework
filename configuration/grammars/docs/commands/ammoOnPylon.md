Returns ammo count on given pylon (or `false` on failure).


---
*Syntaxes:*

vehicle `ammoOnPylon` pylon

---
*Example 1:*

```sqf
private _ammoCount = (vehicle player) ammoOnPylon "pylon1";
```

*Example 2:*

```sqf
hint str (vehicle player ammoOnPylon "pylonCenter");
```