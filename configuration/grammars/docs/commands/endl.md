Creates a string containing a line break, similar to `lineBreak` for `text`. The name is inspired by c++ std::endl (`end` `l`ine).
The command returns **"\r\n"**, which contains control characters rather than printable characters:
<sqf>
hint str count "\r\n";	// 4
hint str count endl;	// 2
</sqf>
The line break works for `diag_log` and `ctrlSetText`.
It does not work with the `hint` because `hint` interprets printable "\n" as line break instead.
Alternatively one can use `toString` command to get other characters.


---
*Example 1:*
```sqf
diag_log ("line1" + endl + "line2");
```

*Example 2:*
```sqf
_ctrl = findDisplay 46 ctrlCreate ["RscTextMulti", -1];
_ctrl ctrlSetPosition [0,0,1,1];
_ctrl ctrlCommit 0;
_ctrl ctrlSetText format ["line1%1line2%1line3", endl];
```