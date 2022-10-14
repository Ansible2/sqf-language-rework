Converts a number into a string, keeping the specified number of decimals. If the desired number of decimals is higher than the actual number, nulls are added to create the desired decimal length. This command is almost identical in behaviour to JavaScript [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed toFixed()]<br><br>
The alternative syntax acts as keyword and switches engine's `Number` to `String` global conversion into desired format, from the moment it is applied until the end of script.
To reset output back to default at any time, use **toFixed -1}} - see {{HashLink|#Example 5**.


---
*Syntaxes:*

number `toFixed` decimals

`toFixed` decimals

---
*Example 1:*

```sqf
123 toFixed 2; // "123.00"
```

*Example 2:*

```sqf
2.34 toFixed 1; // "2.3"
2.35 toFixed 1; // "2.4"
```

*Example 3:*

Convert position to string preserving position precision:

```sqf
fn_posToString = 
{
	format [
		"[%1,%2,%3]", 
		_this select 0 toFixed 8, 
		_this select 1 toFixed 8, 
		_this select 2 toFixed 8
	]
};
str getPos player;					// "[3231.05,171.802,0.00143862]"
getPos player call fn_posToString;	// "[3231.04882813,171.80192566,0.00143862]"
```

*Example 4:*

Same as `Example 3` only using new alternative syntax:

```sqf
str getPos player; // "[3231.05,171.802,0.00143862]"
toFixed 8;
str getPos player; // "[3231.04882813,171.80192566,0.00143862]"
```

*Example 5:*

```sqf
systemChat str position player;		// [11580.3,11797.7,0.00146675]
call
{
	toFixed 6;
	systemChat str position player;	// [11580.341797,11797.737305,0.001467]
};
systemChat str position player;		// [11580.341797,11797.737305,0.001467]
toFixed -1;
systemChat str position player;		// [11580.3,11797.7,0.00146675]
```
Ideal to be used when saving data to a database when more precise positioning is required.

*Example 6:*

```sqf
str (pi/100000);		// "3.14159e-005" - scientific notation
(pi/100000) toFixed 10;	// "0.0000314159" - no scientific notation
str pi;					// "3.14159" - 6 significant figures (default)
pi toFixed 6;			// "3.141593" - forced to 7 significant figures
pi toFixed 7;			// "3.1415927" - forced to 8 significant figures
```