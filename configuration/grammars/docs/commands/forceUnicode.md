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