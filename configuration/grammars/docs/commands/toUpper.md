Converts the supplied Unicode string to all uppercase characters. If the string doesn't have characters with `codes` > 255, use `toUpperANSI`.


---
*Syntaxes:*

`toUpper` string

---
*Example 1:*

```sqf
hint toUpper "AaBb1"; // returns "AABB1"
```