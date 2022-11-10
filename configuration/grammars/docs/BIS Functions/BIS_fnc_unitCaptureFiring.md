Records weapon fire data of input unit over a specified period of time. Pressing the ESC key, the duration ending, or the unit dying ends the recording.


---
*Syntaxes:*

[unit, duration, startTime] spawn `BIS_fnc_unitCaptureFiring`

---
*Example 1:*

```sqf
[BIS_Vehicle, 50, 10] spawn BIS_fnc_unitCaptureFiring;
```

*Example 2:*

```sqf
`2.135, "GAU8", "<NULL-object>"], [2.157,"GAU8","<NULL-object>"` // output example
```