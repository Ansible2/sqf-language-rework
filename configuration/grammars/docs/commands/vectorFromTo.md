Unit vector, equal to direction from vector1 to vector2. In other words this command produces ` normalised vector` between given 2 points.<br>
To get a non-normalised vector, use `vectorDiff`.


---
*Example 1:*
```sqf
[1,2,3] vectorFromTo [4,5,6];
// is the same as
vectorNormalized ([4,5,6] vectorDiff [1,2,3]);
```