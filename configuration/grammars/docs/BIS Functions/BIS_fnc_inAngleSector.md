Checks if a position lies within an angle sector.<br>
`Image: BIS_fnc_inAngleSector.jpg|700px`


---
*Syntaxes:*

[center, centerAngle, sectorWidth, position] call `BIS_fnc_inAngleSector`

---
*Example 1:*

```sqf
[ position player, getDir player, 30, position enemy_tank ] call BIS_fnc_inAngleSector;
```