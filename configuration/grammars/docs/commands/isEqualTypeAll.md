Compares types of all elements of an array to the type of a single value. Since Arma 3 v2.09.149634 no additional check is needed to make sure the first argument is an `Array`.


---
*Syntaxes:*

arr `isEqualTypeAll` val

---
*Example 1:*

```sqf
_arr = [1,2,3,4,5,6,7,8,9,0];
_arr isEqualTypeAll ""; // false
_arr isEqualTypeAll 0;	// true
```

*Example 2:*

```sqf
[] isEqualTypeAll "";	// false
[""] isEqualTypeAll "";	// true
```