Draws a dashed line around the outer edges of a trigger.


---
*Syntaxes:*

[triggers, distance] call `BIS_fnc_drawAO`

---
*Example 1:*

```sqf
[Trigger1] call BIS_fnc_drawAO; // draws a dashed line around trigger1's outer edge, with 50m between each line
```

*Example 2:*

```sqf
[Trigger1, 10] call BIS_fnc_drawAO; // draws a dashed line around trigger1's outer edge, with 10m between each line
```

*Example 3:*

```sqf
`Trigger1, Trigger2` call BIS_fnc_drawAO; // draws dashed lines around multiple triggers, useful for multiple AOs in one mission
```