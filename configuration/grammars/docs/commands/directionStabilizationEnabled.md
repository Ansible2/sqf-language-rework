Get state of direction stabilization. This command returns `true` if the current optic mode of the selected turret has direction stabilization configured in config (**directionStabilized**) and if it is also not disabled by `enableDirectionStabilization`.<br>
This command can not be used to determine if the current optic of the turret has **directionStabilized** enabled in config.


---
*Syntaxes:*

vehicle `directionStabilizationEnabled` turretPath

---
*Example 1:*

```sqf
uav directionStabilizationEnabled [0];
```