Set fade value of CfgORBAT group and all groups below it.


---
*Syntaxes:*

[path, alpha, time] call `BIS_fnc_ORBATSetGroupFade`

---
*Example 1:*

```sqf
[ configFile >> "CfgORBAT" >> "BIS" >> "O_Brigade", 0.5, 5 ] call BIS_fnc_ORBATSetGroupFade;
```