Detects whether position is within area `or` calculates distance to the nearest edge of trigger area by using optional params.


---
*Syntaxes:*

[area, position, returnDistance, includeFloorCeiling] call `BIS_fnc_inTrigger`

---
*Example 1:*

```sqf
private _trigger = createTrigger ["EmptyDetector", getPosATL player];
_trigger setTriggerArea [10, 10, 0, false];
_inTrigger = [_trigger, player] call BIS_fnc_inTrigger; // _inTrigger = true
```