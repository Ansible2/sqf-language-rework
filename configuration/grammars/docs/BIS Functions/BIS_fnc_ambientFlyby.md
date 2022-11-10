Spawns an air unit that moves from point A to point B, never engaging nor being engaged. It is set as captive and will despawn once it reaches its destination.


---
*Syntaxes:*

[startPos, endPos, altitude, speedMode, classname, side] call `BIS_fnc_ambientFlyby`

---
*Example 1:*

```sqf
// spawns a Littlebird that flies from position 200,200,50 to 250,250,75 at altitude 100 and normal speed
`200,200,50], [250,250,75` call BIS_fnc_ambientFlyby;
```

*Example 2:*

```sqf
[getPosATL player, getPosATL opforUnit, 400, "FULL", "B_Heli_Light_01_Armed_F", west] call BIS_fnc_ambientFlyby;
```