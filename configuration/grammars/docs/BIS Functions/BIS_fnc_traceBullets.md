Visualise unit's bullet trajectories. Can only be used on one shooter in a single instance.<br>
If you want to change the unit, first set <sqf inline>BIS_tracedShooter = nil
``` `then` execute the script again.


---
*Syntaxes:*

[unit, number] call `BIS_fnc_traceBullets`

---
*Example 1:*

```sqf
[player] spawn BIS_fnc_traceBullets;
```

*Example 2:*

```sqf
[player, 50] spawn BIS_fnc_traceBullets;
```

*Example 3:*

```sqf
[player, 0] spawn BIS_fnc_traceBullets; // remove bullet tracing
```