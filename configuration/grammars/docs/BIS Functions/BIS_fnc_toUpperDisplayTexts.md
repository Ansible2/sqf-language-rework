Converts text of selected classes in one display to upper-case except classes with name `PlayersName`. Also searches inside `CT_CONTROLS_GROUP`s.


---
*Syntaxes:*

[displayClass, controlClasses, blacklist] call `BIS_fnc_toUpperDisplayTexts`

---
*Example 1:*

```sqf
["RscDisplayOptionsAudio", ["RscText"]] call BIS_fnc_toUpperDisplayTexts;
```