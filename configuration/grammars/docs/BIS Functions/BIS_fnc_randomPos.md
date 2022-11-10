Selects random position according to given params within given area


---
*Syntaxes:*

[whitelist, blacklist, code] call `BIS_fnc_randomPos`

---
*Example 1:*

```sqf
private _randomPosMapNoWater = [] call BIS_fnc_randomPos;
```

*Example 2:*

```sqf
private _randomPosMapNoWater = [nil, ["water"]] call BIS_fnc_randomPos;
```

*Example 3:*

```sqf
private _randomPosMapNoLand = [nil, ["ground"]] call BIS_fnc_randomPos;
```

*Example 4:*

```sqf
private _randomPosMap = [nil, []] call BIS_fnc_randomPos;
```

*Example 5:*

```sqf
private _randomPosAroundPlayer = `[position player, 50]], [` call BIS_fnc_randomPos;
```