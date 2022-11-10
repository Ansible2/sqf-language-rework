Returns indices leading to given class.


---
*Syntaxes:*

[database, path] call `BIS_fnc_dbClassIndex`

---
*Example 1:*

```sqf
`"#MILLER", ["&NAME", "Miller", "&UID", "1234", "&MONEY", 1000]], ["miller"` call BIS_fnc_dbClassIndex; // [0]
```