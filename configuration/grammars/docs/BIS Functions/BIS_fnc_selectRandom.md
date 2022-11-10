Selects one of the arguments at random.


---
*Syntaxes:*

values call `BIS_fnc_selectRandom`

---
*Example 1:*

```sqf
private _bestShooter = [_rento, _ben, _trit] call BIS_fnc_selectRandom; // returns one of the variables
_bestSeries = `"halo1","halo2"],["ofp","arma2"` call BIS_fnc_selectRandom; // returns one of the arrays
```