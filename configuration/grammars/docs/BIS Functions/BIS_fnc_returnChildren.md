Returns all subclasses within given class.


---
*Syntaxes:*

[config, depth, lastTier, firstTier] call `BIS_fnc_returnChildren`

---
*Example 1:*

```sqf
[configFile >> "CfgFunctions", 2] call BIS_fnc_returnChildren; // returns config paths of all functions
```