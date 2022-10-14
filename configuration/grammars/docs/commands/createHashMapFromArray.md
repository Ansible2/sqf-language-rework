Creates a new `HashMap` and initializes it from a key-value pair array


---
*Syntaxes:*

`createHashMapFromArray` [[key1, value1], [key2, value2]]

keys `createHashMapFromArray` values

---
*Example 1:*

```sqf
createHashMapFromArray [["a", 1], ["b", 2], ["c", 3]];
```

*Example 2:*

```sqf
[1, 2, 3, 4] createHashMapFromArray []; // returns [[1, <null>], [2, <null>], [4, <null>], [3, <null>]]
```

*Example 3:*

```sqf
[1, 2, 3] createHashMapFromArray ["one", "two", "three", "four"]; // returns [[1, "one"], [2, "two"], [3, "three"]]
```