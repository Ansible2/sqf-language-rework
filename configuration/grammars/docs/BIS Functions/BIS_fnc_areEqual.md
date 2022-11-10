This function returns true if all of the passed data elements are of the same type and value. One or more elements can be passed.

 operator, because it can handle any data type in any combination.
* For arrays, it returns true if both arrays hold the same elements in the same order.
* If both values are undefined / nil / null, then this function will return true.
* `WARNING:` EXTREMELY large strings (>&nbsp;4k) or compiled code (from a file, for example) might not be properly compared if they are only different near the end of the file.


---
*Syntaxes:*

[anything1, anything2, …, anythingN] call `BIS_fnc_areEqual`

---
*Example 1:*

```sqf
[0, "0"]		call BIS_fnc_areEqual; // false
[0, 1 + 1 - 2]	call BIS_fnc_areEqual; // true
[str 50, "50"]	call BIS_fnc_areEqual; // true
```