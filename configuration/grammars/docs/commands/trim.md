Trims a `string`.


---
*Syntaxes:*

`trim` stringValue

string `trim` [chars, where]

---
*Example 1:*

```sqf
trim "		hello, how are you?  "; // returns "hello, how are you?"
```

*Example 2:*

```sqf
"hewosentence!123" trim ["3e1o2hw", 0]; // returns "sentence!"
```