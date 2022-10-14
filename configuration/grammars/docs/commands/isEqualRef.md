Compares two values by reference, returns `true` if equal.


---
*Syntaxes:*

val1 `isEqualRef` val2

---
*Example 1:*

```sqf
_arr1 = [1,[2,[3]]];
_arr2 = _arr1;
_arr1 isEqualTo _arr2;	// true
_arr1 isEqualRef _arr2;	// true

_arr2 = +_arr1;			// array copy
_arr1 isEqualTo _arr2;	// true
_arr1 isEqualRef _arr2;	// false
```