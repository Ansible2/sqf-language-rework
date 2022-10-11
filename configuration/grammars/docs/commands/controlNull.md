A non-existing `Control`. To compare non-existent objects use `isNull` or `isEqualTo` (see examples).


---
*Example 1:*
```sqf
if (_myCtrl isEqualTo controllNull) then { hint "_myCtrl is null!"; };
```

*Example 2:*
```sqf
controlNull == controlNull;			// returns false
isNull controlNull;						// returns true
controlNull isEqualTo controlNull;		// returns true
```

*Example 3:*
```sqf
str controlNull; // No control
```