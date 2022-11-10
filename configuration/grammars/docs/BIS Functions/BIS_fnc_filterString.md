Removes characters from a string based on the list of allowed characters.


---
*Syntaxes:*

[text, allowedChars] call `BIS_fnc_filterString`

---
*Example 1:*

```sqf
["Player 1 @%!@$"] call BIS_fnc_filterString; // returns "Player1"
```

*Example 2:*

```sqf
["Player 1", "aelrPy"] call BIS_fnc_filterString; // returns "Player"
```