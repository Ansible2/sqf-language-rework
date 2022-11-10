Return number as ordinal number (e.g. 1 become "1st")


---
*Syntaxes:*

[number, language, isFeminine] call `BIS_fnc_ordinalNumber`

---
*Example 1:*

```sqf
private _second = [42] call BIS_fnc_ordinalNumber; // will return "42nd" for English-speaking players
```

*Example 2:*

```sqf
private _num1enm = [1, "English", false] call BIS_fnc_ordinalNumber; // returns "1st"
_num1frm = [1, "French",&nbsp; false] call BIS_fnc_ordinalNumber; // returns "1er"
_num1frw = [1, "French",&nbsp; &nbsp;true] call BIS_fnc_ordinalNumber; // returns "1re"
_num1esm = [1, "Spanish", false] call BIS_fnc_ordinalNumber; // returns "1"
_num1esw = [1, "Spanish", &nbsp;true] call BIS_fnc_ordinalNumber; // returns "1*" for Portuguese, Italian and Spanish
```

*Example 3:*

```sqf
private _num1en = [1, "English"] call BIS_fnc_ordinalNumber; // returns "1st"
_num2en = [2, "English"] call BIS_fnc_ordinalNumber; // returns "2nd"
_num3en = [3, "English"] call BIS_fnc_ordinalNumber; // returns "3rd"
_num4en = [4, "English"] call BIS_fnc_ordinalNumber; // returns "4th"
_num9en = [9, "English"] call BIS_fnc_ordinalNumber; // returns "9th"
```

*Example 4:*

```sqf
private _second = [1, "unknownLanguage"] call BIS_fnc_ordinalNumber; // will return "1." if language is not recognised/supported
```