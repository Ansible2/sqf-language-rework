Handles foldable wings of aircrafts. Is supposed to be used from within class Eventhandlers of the vehicle. See `Arma 3: Aircraft Systems` for information about needed config changes.
```cpp
class Eventhandlers: Eventhandlers
{
	engine = "_this call BIS_fnc_aircraftFoldingWings";
	gear = "_this call BIS_fnc_aircraftFoldingWings";
};
```


---
*Syntaxes:*

[aircraft, animationState] call `BIS_fnc_aircraftFoldingWings`

---
*Example 1:*

```sqf
[_aircraft, 1] call BIS_fnc_aircraftFoldingWings;
```