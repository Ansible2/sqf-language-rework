Decodes a single scalar into array of unique binary flags with indexes between 0-15.


---
*Syntaxes:*

scalar call `BIS_fnc_decodeFlags`

---
*Example 1:*

```sqf
private _decodedFlags = 13 call BIS_fnc_decodeFlags;//Returns [0,2,3]
```