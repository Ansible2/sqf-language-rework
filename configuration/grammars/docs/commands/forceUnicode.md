<div style="float: right">
List of the commands that work with `forceUnicode`:
{{Columns|2|
* `copyFromClipboard`
* `copyToClipboard`
* `count`
* `find`
* `in`
* `insert`
* `reverse`
* `select`
* `splitString`
* `trim`
* `regexFind`
* `regexMatch`
* `regexReplace`
}}
</div>
Sets the Unicode flag which forces some of the string manipulation commands to switch to Unicode. The Unicode flag is always set right after `forceUnicode` command execution, but is reset depending on the command mode: 
* 1 - the Unicode flag is reset right after any of the supported commands executed or the end of script, whichever comes earlier.
* 0 - the Unicode flag is reset at the end of the script. 
When the flag is set it will also affect all scopes within the script including child scopes (see also: `diag_scope`). There are many other string manipulation commands like `ctrlSetText`, `getTextWidth`, etc. that support Unicode by design so no additional forcing is needed.


---
*Syntaxes:*

`forceUnicode` mode

---
*Example 1:*

```sqf
copyToClipboard "д"; // copies "Ð´" to clipboard

forceUnicode 1;
copyToClipboard "д"; // copies "д" to clipboard
```

*Example 2:*

```sqf
private _string = "привет";			// a string that uses Unicode characters
systemChat str count _string;		// 12 - the character count is wrong without forceUnicode

call {
	systemChat str count _string;	// 12 - identical result
	forceUnicode 0;
	systemChat str count _string;	// 6 - correct result
};

systemChat str count _string;		// 6 - outer scope is affected by forceUnicode as well, because the command mode is 0

forceUnicode -1; // cancelled

call {
	systemChat str count _string;	// 12 - wrong count
	forceUnicode 1;
	systemChat str count _string;	// 6 - correct result, but Unicode it reset after this operation, because command mode is 1
};

systemChat str count _string;		// 12 - outer scope is not affected as it was reset right after count
```