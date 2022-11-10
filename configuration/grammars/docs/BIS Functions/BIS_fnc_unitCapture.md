Records movement data of input unit over a specified period of time. Simplified.
Pressing the *(Reference Controls "Esc")* key, the duration ending, or the unit dying ends the recording.<br>
Copies to clipboard an `Array` in format [frameTime, unitPosition, unitDirectionVector, unitUpVector, unitVelocity] for each frame.


---
*Syntaxes:*

[unit, duration, FPS, firing, startTime] spawn `BIS_fnc_unitCapture`

---
*Example 1:*

```sqf
[BIS_Vehicle, 50, 30, true, 10] spawn BIS_fnc_unitCapture;
```