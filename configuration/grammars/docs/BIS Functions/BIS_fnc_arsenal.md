Function used for the `Arma 3: Arsenal|Virtual Arsenal`. The function features four different modes, each mode comes with its own parameters.


---
*Syntaxes:*

[mode, params] call `BIS_fnc_arsenal`

---
*Example 1:*

Opens `Arma 3: Arsenal|Arsenal` with all items:

```sqf
["Open", [true]] call BIS_fnc_arsenal;
```

*Example 2:*

Preloads `Arma 3: Arsenal|Arsenal`'s config:

```sqf
["Preload"] call BIS_fnc_arsenal;
```

*Example 3:*

Adds full `Arsenal` to the `player` object and makes the `action` available when the player is closer than 10 meters from ammoBox:

```sqf
["AmmoboxInit", [ammoBox, true, { _this distance _target  < 10 }]] call BIS_fnc_arsenal;
```

*Example 4:*

Removes Arsenal from player object:

```sqf
["AmmoboxExit", player] call BIS_fnc_arsenal;
```