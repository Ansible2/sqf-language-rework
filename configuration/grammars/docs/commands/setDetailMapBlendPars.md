Sets the detail texture map blend pars. Allows for smooth transition between detailed and undetailed terrain texture at distance.
* If `noDetail` > `fullDetail`, the texture detail will incur smooth transition in the area between the thresholds.
* If `noDetail` <= `fullDetail`, there will be obvious visible edge between texture detail changes at `fullDetail` distance.


---
*Example 1:*
```sqf
setDetailMapBlendPars [20, 50];
```

*Example 2:*
```sqf
setDetailMapBlendPars ([[20, 50], [300, 600]] select (currentWeapon player in ["Binocular", "Rangefinder", "Laserdesignator"]));
```

*Example 3:*
Reset to default:

```sqf
setDetailMapBlendPars [-1, -1];
```