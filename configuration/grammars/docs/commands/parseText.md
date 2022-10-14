Creates a structured text by parsing the given XML description. Do not use `parseText` when displaying a localized text from `Stringtable.xml`.<br>
A detailed explanation of all formatting possibilities can be found at `Structured Text`.


---
*Syntaxes:*

`parseText` text

---
*Example 1:*

```sqf
private _Stxt = parseText "First line<img image='data\isniper.paa'/><br/>Second line";
```

*Example 2:*

```sqf
hintSilent parseText format["<t size='1.25' font='Zeppelin33' color='#ff0000'>%1 lives remaining.</t>", 12];
```

*Example 3:*

```sqf
private _clickableLink = parseText "<a href='http://arma3.com'>A3</a>";
```