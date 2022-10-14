Returns the zero-based index of the first element in array A that also exists in array B. If no common elements exist it returns -1.<br>
Similar in functionality as [[find#Syntax 1|find's first syntax]], but the second parameter is an array of elements to find.


---
*Syntaxes:*

searchIn `findAny` toFind

---
*Example 1:*

```sqf
[0,1,2,3,4] findAny [2,4,6,8]; // returns 2
```

*Example 2:*

```sqf
[0,1,2,3,4] findAny [8,6,4,2]; // returns 2
```

*Example 3:*

```sqf
[0,1,2,3,4] findAny [5,7,9]; // returns -1
```