Adds given value to pair array, stored under unique key.<br><br>

 If value is found:<br>
 a) both values are scalars: values are added and stored as a single scalar<br>
 b) one or both values are array: values are added and stored as a single array<br>
 c) anything else: an array is created and both values are stored there<br><br>


---
*Syntaxes:*

[array, key, value, copyArray] call `BIS_fnc_addToPairs`

---
*Example 1:*

```sqf
`["apple",3],["pear",2]],"pear",10] call BIS_fnc_addToPairs; // Returns [["apple",3],["pear",12`
```

*Example 2:*

```sqf
`["apple",3],["pear",2]],"apple",-2] call BIS_fnc_addToPairs; // Returns [["apple",1],["pear",2`
```

*Example 3:*

```sqf
`["greetings","Hello!"],["rudewords",""`,"greetings","Hi!"] call BIS_fnc_addToPairs; // Returns `"greetings",["Hello!","Hi!"`,["rudewords",""]]
```