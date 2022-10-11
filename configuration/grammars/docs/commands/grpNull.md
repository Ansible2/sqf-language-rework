A non-existing `Group`. To compare non-existent groups use `isNull` or `isEqualTo`:
<sqf>
grpNull == grpNull;			// false
isNull grpNull;				// true
grpNull isEqualTo grpNull;	// true
</sqf>


---
*Example 1:*
```sqf
!isNull grpNull; // false
```

*Example 2:*
```sqf
str grpNull; // <NULL-group>
```