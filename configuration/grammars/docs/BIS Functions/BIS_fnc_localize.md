Checks if passed string is localization key and if so, return the localized text. Else, returns the passed string itself.


---
*Syntaxes:*

localizationString call `BIS_fnc_localize`

---
*Example 1:*

```sqf
// assuming the stringtable contains a key "STR_someString" with the value "Hello world"
"STR_someString" call BIS_fnc_localize; // returns "Hello world"

// assuming the stringtable does not contain a key "STR_anotherString"
"STR_anotherString" call BIS_fnc_localize; // returns "STR_anotherString"
```