Converts the supplied Unicode string to all lowercase characters. If the string doesn't have characters with `codes` > 255, use `toLowerANSI`.


---
*Syntaxes:*

`toLower` string

---
*Example 1:*

```sqf
hint toLower "AaBb1"; // returns "aabb1"
```