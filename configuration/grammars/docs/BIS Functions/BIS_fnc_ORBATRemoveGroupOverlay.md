Unregister texture(s) to be displayed over CfgORBAT group.


---
*Syntaxes:*

[path, number] call `BIS_fnc_ORBATRemoveGroupOverlay`

---
*Example 1:*

```sqf
[ configFile >> "CfgORBAT" >> "BIS" >> "O_Brigade", 4 ] call BIS_fnc_ORBATRemoveGroupOverlay;
```