Converts the supplied `String` into an `Array` of `Number`s. The numbers in the created array are the decimal [Unicode](https://en.wikipedia.org/wiki/Unicode) representations of characters.


---
*Example 1:*
```sqf
hint format ["%1", toArray "AaŒ"];// Returns "[65,97,338]"
```

*Example 2:*
```sqf
toArray _hashMap params ["_keys", "_values"];
```