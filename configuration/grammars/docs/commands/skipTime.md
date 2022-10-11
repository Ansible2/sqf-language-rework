Jumps the specified number of hours forward or backward.<br>The time of day and tides are adjusted, but no changes are made to any units. If present, the lower level of clouds instantly jump to the position they would be in if time had passed normally.


---
*Example 1:*
```sqf
skipTime 5;
```

*Example 2:*
```sqf
skipTime (5/60); // be sure to use parentheses, otherwise here (skipTime 5)/60 will happen
```

*Example 3:*
```sqf
while {true} do 
{
	skipTime 0.00333;
	sleep 0.1; // smooth time transition
};
```

*Example 4:*
```sqf
skipTime ((_timeToSkipTo - dayTime + 24) % 24); // skip forward to a specific time, irrespective of the current mission time
```