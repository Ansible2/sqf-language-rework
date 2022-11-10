Encodes array of unique binary flags with indexes between 0-15 into a single scalar.


---
*Syntaxes:*

flags call `BIS_fnc_encodeFlags`

---
*Example 1:*

```sqf
private _encodedFlags = [0,2,3] call BIS_fnc_encodeFlags;//Returns 13
```