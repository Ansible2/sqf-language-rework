Compares two values by reference, returns `true` if not equal.


---
*Syntaxes:*

val1 `isNotEqualRef` val2

---
*Example 1:*

```sqf
_arr1 = [1,[2,[3]]];
_arr2 = _arr1;
_arr1 isEqualTo _arr2;	// true
_arr1 isNotEqualRef _arr2;	// false

_arr2 = +_arr1;			// array copy
_arr1 isEqualTo _arr2;	// true
_arr1 isNotEqualRef _arr2;	// true
```