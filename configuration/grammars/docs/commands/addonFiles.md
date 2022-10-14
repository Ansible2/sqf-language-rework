Returns a list of files present in the addon.<br>


---
*Syntaxes:*

`addonFiles` [pboPrefix, fileExtension]

---
*Example 1:*

```sqf
addonFiles ["a3\3den\", ".paa"];
/*
	[
		"a3\3den\data\attributes\formation\ech_left_ca.paa",
		"a3\3den\data\attributes\formation\stag_column_ca.paa",
		"a3\3den\data\attributes\stance\down_ca.paa",
		"a3\3den\data\cfg3den\layer\icondisabled_ca.paa",
		"a3\3den\data\controlsgroups\diagmousecontrol\mouse_ca.paa",
		...
	]
*/
```