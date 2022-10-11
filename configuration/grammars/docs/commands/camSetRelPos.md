Sets the position of the given camera relative to its target, set with `camSetTarget`. Needs a call to `camCommit` to be conducted.


---
*Example 1:*
```sqf
_cam camSetTarget _car;
_cam camSetRelPos [0,10,8];
```