Skips current loop iteration and continues with the next one.


---
*Example 1:*
```sqf
// prints 0, 1, 3
for "_i" from 0 to 3 do 
{
	if (_i == 2) then { continue };
	systemChat str _i;
};
```