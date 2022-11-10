Return a unique object variable. The variable is preserved after unit respawn.


---
*Syntaxes:*

[object, varNameRoot] call `BIS_fnc_objectVar`

---
*Example 1:*

```sqf
hint str (player call BIS_fnc_objectVar); // "bis_o1"
hint str (player == (missionNamespace getVariable "bis_o1")); // true
```