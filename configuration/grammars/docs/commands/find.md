Searches for an array element within array or a ANSI string within a ANSI string.


---
*Syntaxes:*

array `find` element

string `find` substring

string `find` [substring, indexStart]

---
*Example 1:*

```sqf
["Apples", "Oranges", "Pears"] find "Oranges"; // returns 1
```

*Example 2:*

```sqf
[1, [2], [[3]]] find [[3]]; // returns 2 - does not work in OFP
```

*Example 3:*

```sqf
if (magazines player find "Strela" != -1) then { hint "You've got Strela!"; };
```

*Example 4:*

```sqf
hint str ("japa is the man!" find "the man!"); // returns 8
```

*Example 5:*

```sqf
"abc" find ""; // returns 0
```

*Example 6:*

```sqf
"abcdefghijklmnopqrstuvxyz" find ["z", 20];
```