Plays back input movement data on input unit. Simplified.


---
*Syntaxes:*

[unit, data, varDone, stateIngnore, debug, sleep, skipTime] spawn `BIS_fnc_unitPlaySimple`

---
*Example 1:*

```sqf
private _capturedData = `0,[8208.26,1953.13,296.04],67`;
[BIS_Vehicle, _capturedData, [BIS_Object, "DoneRecording"], true, false, 0.2, 5] spawn BIS_fnc_unitPlaySimple;
```