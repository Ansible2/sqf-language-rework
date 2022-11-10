Movie credits function.


---
*Syntaxes:*

[display, mode] call `BIS_fnc_credits_movie`

---
*Example 1:*

```sqf
[] spawn BIS_fnc_credits_movie;
```

*Example 2:*

Display the credits full screen:

```sqf
[] spawn {
	disableSerialization;
	// create credits
	(findDisplay 46) createDisplay "RscCredits";
	[] call BIS_fnc_credits_movie;
};
```