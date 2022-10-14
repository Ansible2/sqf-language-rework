Cross product of two 3D vectors. 
<br>In layman's terms, if you have a polygon (surface) defined by 3 points, you can find a normal to it (just like terrain `surfaceNormal`). To invert direction of the normal, swap arguments around.


---
*Syntaxes:*

vector1 `vectorCrossProduct` vector2

---
*Example 1:*

```sqf
_vector = [1,1,1] vectorCrossProduct [2,2,2];
```

*Example 2:*

```sqf
_vectorUp = [0,1,0] vectorCrossProduct [-1,0,0]; //[0,-0,1]
```

*Example 3:*

```sqf
_vectorSide = (vectorDir player) vectorCrossProduct (vectorUp player);
```