Works similar to the `BIS_fnc_addToPairs` but it doesn't try to add values. It just overwrites the volue if the key already exists.


---
*Syntaxes:*

[array, key, newValue] call `BIS_fnc_setToPairs`

---
*Example 1:*

```sqf
`["apple",3],["pear",2]],"pear",10] call BIS_fnc_setToPairs; // Returns [["apple",3],["pear",10`
```