Set object's up vector. Direction of the object remain unchanged. Default object's `vectorUp` is [0,0,1].


---
*Syntaxes:*

object `setVectorUp` vectorUp

---
*Example 1:*

Turn object upside down:

```sqf
_obj setVectorUp [0,0,-1];
```

*Example 2:*

Align object with the terrain underneath:

```sqf
_obj setVectorUp surfaceNormal position _obj;
```