Highlights given control by drawing a border around it and letting it pulsate. The effect is visible until explicitly removed. <br>


---
*Syntaxes:*

[displayOrControl, thickness] call `BIS_fnc_highlightControl`

---
*Example 1:*

```sqf
[findDisplay 313 displayCtrl 1023] call BIS_fnc_highlightControl;	// highlights the play button in Eden Editor
[findDisplay 313] call BIS_fnc_highlightControl;					// removes the previously created highlight effect
```

*Example 2:*

```sqf
[] spawn
{
  disableSerialization;
  private _ctrlHighlight = [findDisplay 313 displayCtrl 1023),5] call BIS_fnc_highlightControl;
  sleep 2;
  ctrlDelete _ctrlHighlight;
}; // highlights the play button in Eden Editor and removes the effect after two seconds
```