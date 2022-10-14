Displays a text message in the center of the screen. The text can be displayed on multiple lines by using "\n" new line characters: <sqf inline>cutText ["line1\nline2\nline3", "PLAIN"];
```


---
*Syntaxes:*

`cutText` [text, type, speed, showInMap, isStructuredText]

layer `cutText` [text, type, speed, showInMap, isStructuredText]

---
*Example 1:*

```sqf
cutText ["", "BLACK OUT"];
cutText ["Hello World!", "PLAIN", 2];
```

*Example 2:*

```sqf
2 cutText ["Hello World!", "PLAIN", 2]; // returns nothing
```

*Example 3:*

```sqf
private _layer1 = "normal" cutText ["In The Centre", "PLAIN"];
private _layer2 = "down" cutText ["At The Bottom", "PLAIN DOWN"];
```

*Example 4:*

```sqf
cutText ["<t color='#ff0000' size='5'>RED ALERT!</t><br/>***********", "PLAIN", -1, true, true];
```