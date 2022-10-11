Removes a given Event Handler that was added with `addEventHandler`.


---
*Example 1:*
```sqf
player removeEventHandler ["Killed", 0];
```

*Example 2:*
The `Magic Variables` <var>_thisEvent</var> and <var>_thisEventHandler</var> can be used to easily remove an Event Handler:

```sqf
player addEventHandler ["FiredNear", {
	systemChat "This Event Handler is now removing itself!";
	player removeEventHandler [_thisEvent, _thisEventHandler];
}];
```