Returns DIK code of a given key.


---
*Syntaxes:*

input call `BIS_fnc_keyCode`

---
*Example 1:*

```sqf
13 call BIS_fnc_keyCode; // Returns "EQUALS"
```

*Example 2:*

```sqf
"EQUALS" call BIS_fnc_keyCode; // returns 13
```

*Example 3:*

```sqf
true call BIS_fnc_keyCode; // returns ["ESCAPE",1,"1",2,"2",3,"3",4,"4",5,"5",6,"6",7,"7",8,"8",9,"9",10,"0",11,"MINUS",12,"EQUALS",13...]
```