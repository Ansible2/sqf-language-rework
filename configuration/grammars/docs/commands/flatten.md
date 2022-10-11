Flattens an array.


---
*Example 1:*
```sqf
flatten [1, [2], [[3]], [[[4]]]]; // returns [1, 2, 3, 4]
```

*Example 2:*
```sqf
flatten getUnitLoadout player;
```