Scales an `attached object` or a [[Arma_3_Simple_Objects|Simple Object]]'s model.


---
*Example 1:*
```sqf
_mrap attachTo [player,[0,0,0]];
_mrap setObjectScale 0.1;
```

*Example 2:*
```sqf
// Select an object in Eden Editor and execute the following code in the Arma 3: Debug Console. When moving the object, the effect is reset!
(get3DENSelected "Object" # 0) setObjectScale 0.1;
```