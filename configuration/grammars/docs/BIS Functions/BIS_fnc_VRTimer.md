Timer for VR and time trials. The following `missionNamespace` variables can be used:
* **BIS_stopTimer**: set to `true` to stop the timer. Once stopped, the function must be executed again to restart the timer
* **RscFiringDrillTime_current**: fill with `Structured Text` to display text instead of timer (when timer is stopped)
* **RscFiringDrillTime_done**: set to `true` to close the display. `Stop the timer first`


---
*Syntaxes:*

[colour] spawn `BIS_fnc_VRTimer`

---
*Example 1:*

```sqf
[] spawn BIS_fnc_VRTimer;
```

*Example 2:*

```sqf
"#025D00" spawn BIS_fnc_VRTimer;
```

*Example 3:*

```sqf
["#025D00"] spawn BIS_fnc_VRTimer;
```