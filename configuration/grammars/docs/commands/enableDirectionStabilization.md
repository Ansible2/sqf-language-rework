Enables / disables direction stabilization of turrets. This command only has an effect if the current optic mode of the selected turret has **directionStabilized** configured in config.


---
*Example 1:*
```sqf
uav enableDirectionStabilization [false, [0]]; // Disable direction stabilization for the first turret
```

*Example 2:*
```sqf
uav enableDirectionStabilization [true, [0]];
```

*Example 3:*
```sqf
uav enableDirectionStabilization [false]; // Disable direction stabilization for the primary turret
```