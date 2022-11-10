Set relationship of competing Trident sides.
When the value reaches threshold, side relationship will change.
The value slowly decreases towards 0.


---
*Syntaxes:*

[side1, side2, value, absolute] call `BIS_fnc_tridentSetRelationship`

---
*Example 1:*

```sqf
[west, east, 0.5, true] call BIS_fnc_tridentSetRelationship;
```