Set helicopter advanced flight model HUD limits and prevents overwriting existing values. See also `setHUDMovementLevels`.


---
*Syntaxes:*

[speedLimit, altLimit, dirLimit] call `BIS_fnc_HUDLimits`

---
*Example 1:*

```sqf
`0,0,0], [1, 0, 50], [0,0,0` call BIS_fnc_HUDLimits; // limits altitude on HUD to 50m max
```

*Example 2:*

```sqf
`0,0,0], [0, 0, 0], [1,330,30, myTarget` call BIS_fnc_HUDLimits; // limits orientation towards myTarget by ±30°
```