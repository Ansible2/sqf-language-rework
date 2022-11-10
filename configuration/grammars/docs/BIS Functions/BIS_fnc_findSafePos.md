This function generates position on a map according to several given parameters (see diagram).
`Image:bis_fnc_findsafepos.jpg|600px|thumb|Diagram`
The position `pos` will be generated inside an area which resides between `minDist` and `maxDist` from the given `center`. If `objDist` is also specified, the position will be selected `objDist` away from nearest terrain object. If `maxGrad` > 0 then the position will be also checked for how flat the area around is within `objDist` radius. The function can additionally be instructed to generate position specifically on water or land (`waterMode`) or on a shoreline (`shoreMode`). The `shoreLine` param will be ignored if position is not requested specifically on land.<br><br>
Additionally, generated position could be checked against the list of blacklisted positions `blacklistPos`. If search for suitable position failed, `defaultPos` position will be used. The format for `defaultPos` is array with 2 positions: [posOnLand, posOnWater].


---
*Syntaxes:*

[center, minDist, maxDist, objDist, waterMode, maxGrad, shoreMode, blacklistPos, defaultPos] call `BIS_fnc_findSafePos`

---
*Example 1:*

Find position minimum 1m from from player but not further than 150m, not closer than 3m to any other object, not in the water, maximum gradient of 20, not on the shoreline:

```sqf
private _pos = [player, 1, 150, 3, 0, 20, 0] call BIS_fnc_findSafePos;
```

*Example 2:*

```sqf
private _pos = [getPos player, 2000, 5000, 1, 0, 0.7, 0, [], [getPos player, getPos player]] call BIS_fnc_findSafePos;
```

*Example 3:*

```sqf
private _pos = [[], 0, 1000] call BIS_fnc_findSafePos;
```