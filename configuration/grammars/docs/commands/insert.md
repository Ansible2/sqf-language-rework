Inserts multiple values into `Array`/`String`/`HashMap`.<br>
The `String` variant also supports `forceUnicode`.


---
*Syntaxes:*

array `insert` [index, valuesToInsert, onlyIfUnique]

string `insert` [index, substring]

hashMap `insert` [<nowiki/>[key1, value1], [key2, value2], ...]

hashMap `insert`  [splitArray, [keysAndValues]]

---
*Example 1:*

```sqf
"Test" insert [0, "Radio"]; // returns "RadioTest"
```