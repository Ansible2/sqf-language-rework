Computes the {{Wikipedia|Euclidean_distance#Squared_Euclidean_distance|squared distance}} between two objects or positions.


---
*Example 1:*
```sqf
player distanceSqr (leader player);
```

*Example 2:*
```sqf
_distance = sqrt ((x2 - x1) ^ 2 + (y2 - y1) ^ 2 + (z2 - z1) ^ 2);
_distanceSqr = (x2 - x1) ^ 2 + (y2 - y1) ^ 2 + (z2 - z1) ^ 2;
_distance = [x1, y1, z1] distance [x2, y2, z2];
_distanceSqr = [x1, y1, z1] distanceSqr [x2, y2, z2];
_distance = sqrt ([x1, y1, z1] distanceSqr [x2, y2, z2]);
_distanceSqr = ([x1, y1, z1] distance [x2, y2, z2]) ^ 2;
```

<!-- KK, your turn!
If normal distance is calculated according to this formula:

squared distance is calculated according to this formula:  
-->