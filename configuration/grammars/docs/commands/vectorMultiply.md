Multiplies 3D vector by a scalar.


---
*Syntaxes:*

vector `vectorMultiply` scalar

---
*Example 1:*

```sqf
_newVector = [1,2,3] vectorMultiply 3; // returns [3,6,9]
```

*Example 2:*

```sqf
 
private _eyePos = eyePos player;
private _eyeDir = getCameraViewDirection player;    // this is a normalized vector, i.e. its magnitude is 1
private _100mFurther = _eyeDir vectorMultiply 100;  // since _eyeDir is normalized, multiplying it by 100 means 100 m in that direction
private _lookPos = _eyePos vectorAdd _100mFurther;  // the position where player is looking 100m ahead
```