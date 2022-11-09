Displays text across the screen. If used along with `cutText` two different texts (in different type styles) can be shown at once.
The text can be displayed on multiple lines by using "\n" new line characters (see *(Reference HashLink "#Example 3")*).


---
*Syntaxes:*

`titleText` [text, type, speed,  showInMap, isStructuredText]

---
*Example 1:*

```sqf
titleText ["Show this text", "PLAIN"];
```

*Example 2:*

```sqf
titleText ["Your message", "BLACK", 2];
```

*Example 3:*

```sqf
titleText ["line1\nline2\nline3", "PLAIN"];
```

*Example 4:*

```sqf
titleText ["<t color='#ff0000' size='5'>RED ALERT!</t><br/>***********", "PLAIN", -1, true, true];
```