Detects which `{{arma2}}` expansions and addons are available. Only works in {{arma2}}/{{arma2oa}}.


---
*Syntaxes:*

call `BIS_fnc_version`

---
*Example 1:*

```sqf
private _availableExpansions = call BIS_fnc_version;
```

*Example 2:*

```sqf
private _playerHasPMC = 4 in (call BIS_fnc_version);
```