Return whether or not the local player joined the game while it was already in progress. {{Feature|important|{{GVI|arma3|1.50


---
*Syntaxes:*

[] call `BIS_fnc_didJIP`

---
*Example 1:*

```sqf
if ([] call BIS_fnc_didJIP) then { forceRespawn player };
```