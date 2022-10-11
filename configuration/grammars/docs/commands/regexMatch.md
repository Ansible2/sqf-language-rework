Returns whether the `haystack` matches the `pattern`.


---
*Example 1:*
```sqf
"I'm a coOkIe clicker" regexMatch ".*cookie.*"; // true
```

*Example 2:*
```sqf
"I'm a coOkIe clicker" regexMatch ".*cookie.*/"; // false, empty flags == case sensitive
```

*Example 3:*
```sqf
forceUnicode 1;
"I'm a coÖkIe clicker" regexMatch ".*coökie.*";
```

*Example 4:*
```sqf
"Cookie clicker" regexMatch "cookie/i"; // false, pattern does not fully match the haystack
```