Creates a `Structured Text` similar to `format` command.


---
*Syntaxes:*

`formatText` [format, argument1, argument2, ...]

---
*Example 1:*

```sqf
hint formatText ["Image: %1", image "\a3\Data_f\Flags\flag_Altis_co.paa"];
```

*Example 2:*

```sqf
hint formatText ["%1%2%3", "line1", "<br/>", "line2"];		// result displayed in one line
hint formatText ["%1%2%3", "line1", lineBreak, "line2"];	// result displayed in two lines
```