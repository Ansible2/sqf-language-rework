Spawn units based on curator settings. Used when curator role is not taken.


---
*Syntaxes:*

[curator, sides, cheatCoef, infantryProb, groundProb, airProb, marineProb] call `BIS_fnc_curatorAutomatic`

---
*Example 1:*

```sqf
[curator_module, [west, independent, 0.1, 40, 30, 20, 10] call BIS_fnc_curatorAutomatic;
```