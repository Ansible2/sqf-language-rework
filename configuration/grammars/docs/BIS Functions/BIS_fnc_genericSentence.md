Play generic sentence with probablity set by bis_genericSentenceMode variable (0.5 = 50%, 1 = 100%)


---
*Syntaxes:*

[class, speaker, delay, canRepeat] call `BIS_fnc_genericSentence`

---
*Example 1:*

```sqf
["FeedbackFlightNegativeHeightTooHigh"] call BIS_fnc_genericSentence;
```

*Example 2:*

```sqf
["FeedbackFlightNegativeSpeedTooSlow",nil,5,true] call BIS_fnc_genericSentence;
```