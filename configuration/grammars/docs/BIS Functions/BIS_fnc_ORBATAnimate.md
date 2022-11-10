Animates an ORBAT viewer.


---
*Syntaxes:*

[target, zoom, duration] spawn `BIS_fnc_ORBATAnimate`

---
*Example 1:*

```sqf
[ configFile >> "CfgORBAT" >> "BIS" >> "B_1_A_1", 0.5, 3 ] spawn BIS_fnc_ORBATAnimate;
```