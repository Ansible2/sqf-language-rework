Fetch a variable saved on server.
Used when you want to share variables only to specific clients to prevent large traffic.
Must be run in `scheduled environment` because communication with server takes some time.


---
*Syntaxes:*

[target, varName, default] call `BIS_fnc_getServerVariable`

---
*Example 1:*

```sqf
[missionNamespace, "BIS_someVar", "defaultValue"] call BIS_fnc_getServerVariable;
```