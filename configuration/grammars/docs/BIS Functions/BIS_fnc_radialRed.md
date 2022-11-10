Red radial postprocess (hit damage, fire damage). Parameters are the same as the first four of `Arma_3:_Event_Handlers#HandleDamage|HandleDamage EH`.


---
*Syntaxes:*

[victim, bodyPart, damage, shooter] call `BIS_fnc_radialRed`

---
*Example 1:*

```sqf
player addEventHandler ["HandleDamage", { _this call BIS_fnc_radialRed; }];
```