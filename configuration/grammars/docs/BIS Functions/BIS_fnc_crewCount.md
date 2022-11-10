Function that counts amount of seats, both for crew and cargo seats.


---
*Syntaxes:*

param call `BIS_fnc_crewCount`

---
*Example 1:*

```sqf
crewCount = ["B_Heli_Light_01_F", false] call BIS_fnc_crewCount; // Counts all available seats excluding cargo slots. Returns 6 (see notes).
```

*Example 2:*

```sqf
crewCount = ["B_Heli_Transport_01_F", true] call BIS_fnc_crewCount; // Counts all available seats including cargo slots. Returns 12.
```