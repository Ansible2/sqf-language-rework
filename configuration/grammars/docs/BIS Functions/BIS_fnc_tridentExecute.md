Execute a code based on Trident relationship.


---
*Syntaxes:*

[side_1, side_2, codeFriendly, codeEnemy] call `BIS_fnc_tridentExecute`

---
*Example 1:*

```sqf
[west, east, { params ["_higherScore", "_lowerScore", "_areAllied"] }] call BIS_fnc_tridentExecute;
```