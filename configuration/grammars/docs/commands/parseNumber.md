Parses the string, interpreting its content as a floating point number.


---
*Example 1:*
```sqf
_number = parseNumber "0.125";			// 0.125
_number = parseNumber "0050";			// 50
_number = parseNumber "   42 yes";		// 42
_number = parseNumber "3 or 4";			// 3
_number = parseNumber "either 3 or 4";	// 0
_number = parseNumber "0xCF";			// 0
```

*Example 2:*
since <See arm Reference 3> v1.50:

```sqf
private _result = parseNumber false;				// 0
private _result = parseNumber true;					// 1
private _zeroOneStatus = parseNumber alive player;	// 0 if the player is dead, 1 if alive
```