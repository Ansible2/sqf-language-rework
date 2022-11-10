Creates non-simulated framerate and network performance friendly object - a `Arma 3: Simple Objects|Simple Object` - and applies different adjustments to fake non-existing physX and engine interactions. The adjustments need either to be stored in the object config or provided as the function input, otherwise they need to be done manually.<br>
<br>
Simple objects cannot be destroyed and do not interact with the environment. They are useful for creating low performance-demanding static compositions (walls, rocks, wrecks, …) and/or environments where shooting and collisions are not expected.


---
*Syntaxes:*

[input, position, direction, followTerrain, forceSuperSimpleObject] call `BIS_fnc_createSimpleObject`

---
*Example 1:*

```sqf
["B_Boat_Armed_01_minigun_F", getPosWorld player, getDir player] call BIS_fnc_createSimpleObject;
```

*Example 2:*

```sqf
["B_Boat_Armed_01_minigun_F", player modelToWorldWorld [0,5,0], getDir player + 90, false, false] call BIS_fnc_createSimpleObject;
```