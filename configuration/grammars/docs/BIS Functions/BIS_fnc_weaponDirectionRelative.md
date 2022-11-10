Returns relative direction vector of given weapon for the given vehicle


---
*Syntaxes:*

[vehicle, weapon, visual] call `BIS_fnc_weaponDirectionRelative`

---
*Example 1:*

```sqf
private _relweapondir = [tank, "cannon_105mm"] call BIS_fnc_weaponDirectionRelative;
```