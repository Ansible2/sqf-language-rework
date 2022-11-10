Set variable stored only on server. Clients can the download it using `BIS_fnc_getServerVariable`. Used when you want to share variables only to specific clients to prevent large traffic.


---
*Syntaxes:*

[namespace, varName, value] call `BIS_fnc_setServerVariable`

---
*Example 1:*

```sqf
[nil, "playerHealth", damage player] call BIS_fnc_setServerVariable;
```

*Example 2:*

```sqf
[player, "playerHealth", damage player] call BIS_fnc_setServerVariable;
```