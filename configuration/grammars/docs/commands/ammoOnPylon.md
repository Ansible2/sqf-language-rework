Returns ammo count on given pylon (or `false` on failure).


---
*Example 1:*
```sqf
private _ammoCount = (vehicle player) ammoOnPylon "pylon1";
```

*Example 2:*
```sqf
hint str (vehicle player ammoOnPylon "pylonCenter");
```