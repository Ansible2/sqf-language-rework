Insert an element to the back of the given array. This command modifies the original array. (see also: `pushBackUnique`)


---
*Syntaxes:*

array `pushBack` element

---
*Example 1:*

```sqf
_arr = [1,2,3];
_arr pushBack 4;
hint str _arr; //[1,2,3,4]
```

*Example 2:*

```sqf
_arr = [1,[2,4],3];
(_arr select 1) pushBack [5,6];
hint str _arr //[1,[2,4,[5,6]],3]
```