Returns a `Structured Text` created from the given `structured` text and sets ` attributes` to the given values.


---
*Syntaxes:*

text `setAttributes` [name1, value1, name2, value2, ...]

---
*Example 1:*

```sqf
_txt = text "Red text, right align";
_txt setAttributes ["color", "#FF0000", "align", "right"];
hint composeText [_txt];
```