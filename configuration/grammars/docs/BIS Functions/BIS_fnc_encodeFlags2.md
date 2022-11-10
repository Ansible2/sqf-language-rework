Encodes array of unique binary flags (zeroes or ones) into a single scalar.


---
*Syntaxes:*

arrayOfNumbers call `BIS_fnc_encodeFlags2`

---
*Example 1:*

```sqf
private _result = [1,0,1,1] call BIS_fnc_encodeFlags2;
hint str _result; // Displays 13
```