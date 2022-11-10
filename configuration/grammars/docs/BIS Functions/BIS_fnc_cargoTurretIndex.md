Return cargo index of a person turret and the other way around.


---
*Syntaxes:*

[vehicle, personOrTurretPath] call `BIS_fnc_cargoTurretIndex`

---
*Example 1:*

```sqf
private _vehicle = vehicle player;
private _turretCargoIndex = [_vehicle, [0, 1]] call BIS_fnc_cargoTurretIndex;
private _playerTurretPath = [_vehicle, player] call BIS_fnc_cargoTurretIndex;
```