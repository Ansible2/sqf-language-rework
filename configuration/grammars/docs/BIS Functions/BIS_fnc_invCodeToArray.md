Converts inventory code (used in configs) to array with numbers for weapons and magazines (and their counts).


---
*Syntaxes:*

[configCode] call `BIS_fnc_invCodeToArray`

---
*Example 1:*

```sqf
[ call compile getText (configfile >> "CfgVehicles" >> typeOf player >> "weaponSlots")] call BIS_fnc_invCodeToArray;//Can return [1,0,0,0,0,0,0,0]
```