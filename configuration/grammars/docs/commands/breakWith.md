Skips all loop iterations and immediately returns the given value.


---
*Example 1:*
```sqf
// stops once _i reaches 5 and outputs 0, 1, 2, 3, 4, END
systemChat call {
	for "_i" from 0 to 10 do {
		if (_i == 5) then { breakWith "END"; };
		systemChat str _i;
	};
};
```