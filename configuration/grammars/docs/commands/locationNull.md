A non-existing `Location`. To compare non-existent locations use `isNull` or `isEqualTo`:
<sqf>
locationNull == locationNull;			// false
isNull locationNull;					// true
locationNull isEqualTo locationNull;	// true
</sqf>


---
*Example 1:*
```sqf
!isNull locationNull; // false
```

*Example 2:*
```sqf
str locationNull; // No location
```

*Example 3:*
```sqf
position locationNull; // [0,0,0]
```