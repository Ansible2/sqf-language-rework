Function to fill all crew positions in a vehicle, including turrets.
	In dummy mode no objects are created and the returned array contains only ones.
	In this mode the function can be used to count the actual crew of an existing vehicle or vehicle type.


---
*Syntaxes:*

[vehicle,group,dummyMode,dummyType,crewType]] call `BIS_fnc_spawnCrew`

---
*Example 1:*

```sqf
[ BIS_vehicle, group player ] call BIS_fnc_spawnCrew;
```