This command sets random heading on the player's compass (both in map and in 3D view) with given frequency, which is also randomised.


---
*Example 1:*
Set compass to oscillate every second within -90/+90 degrees:

```sqf
setCompassOscillation [rad 90, 1, 1];
```

*Example 2:*
Change heading every 60 to 90 seconds:

```sqf
setCompassOscillation [rad 180, 60, 90];
```

*Example 3:*
Make compass go crazy:

```sqf
setCompassOscillation [rad 360, 0.1, 0.2];
```

*Example 4:*
Reset to default behaviour:

```sqf
setCompassOscillation [-1, 0, 0];
```