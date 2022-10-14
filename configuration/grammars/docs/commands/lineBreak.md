Creates a structured text containing a line break.


---
*Syntaxes:*

`lineBreak`

---
*Example 1:*

```sqf
hint composeText ["First line", lineBreak, "Second line"];
```

*Example 2:*

```sqf
hint str (composeText [lineBreak] == parseText "<br/>"); // true
```