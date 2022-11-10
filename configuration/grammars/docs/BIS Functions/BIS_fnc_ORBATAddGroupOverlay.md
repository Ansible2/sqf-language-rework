Register texture(s) to be displayed over CfgORBAT group.


---
*Syntaxes:*

[target, texture, colour, widthMulti, heightMulti, angle, text, shadow] call `BIS_fnc_ORBATAddGroupOverlay`

---
*Example 1:*

```sqf
[ configFile >> "CfgORBAT" >> "BIS" >> "B_1_A_1", "\A3\weapons_f\data\UI\icon_MG_CA.paa", [0,0,01], 3, 3, 0, "Some Text", true ] call BIS_fnc_ORBATAddGroupOverlay;
```