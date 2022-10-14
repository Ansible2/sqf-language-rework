Skips the current loop iteration, continues with the next one and returns the given value.


---
*Syntaxes:*

`continueWith` return

---
*Example 1:*

```sqf
// results in [2, "TEST", 4]
private _result = [1, 2, 3] apply {
	if (_x == 2) then {
		continueWith "TEST";
	} else {
		_x + 1;
	};
};
```