Returns whether the object is fully underwater.


---
*Example 1:*
```sqf
private _isUnderwater = underwater vehicle player;
```

*Example 2:*
```sqf
private _isHeadUnderwater = eyePos player select 2 < 0;
```