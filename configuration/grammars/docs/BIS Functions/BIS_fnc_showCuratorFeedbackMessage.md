Show feedback message when illegal operation is attempted in curator interface.<br>


---
*Syntaxes:*

[curator, messageInfo] call `BIS_fnc_showCuratorFeedbackMessage`

---
*Example 1:*

```sqf
[objNull, 404] call BIS_fnc_showCuratorFeedbackMessage;
```

*Example 2:*

```sqf
[objNull, "You can't do that!"] call BIS_fnc_showCuratorFeedbackMessage]];
```