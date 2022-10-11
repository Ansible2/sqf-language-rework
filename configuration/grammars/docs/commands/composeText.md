Creates a `Structured Text` by joining the given ` structured` or ` plain` text arguments.


---
*Example 1:*
```sqf
hint composeText ["Image: ", image "\a3\Data_f\Flags\flag_Altis_co.paa"];
```

*Example 2:*
```sqf
hint composeText ["line1", "<br/>", "line2"];		// result displayed in one line
hint composeText ["line1", lineBreak, "line2"];	// result displayed in two lines
```