Returns [transposed](https://en.wikipedia.org/wiki/Transpose) version of the given matrix.
The matrix is an `Array` of rows.
Each row is an `Array` of corresponding column values for the row. The minimum number of rows is 1.


---
*Example 1:*
```sqf
matrixTranspose 
[
	[1,2,3], 
	[3,1,2], 
	[2,3,1]
];
/* returns 
[
	[1,3,2], 
	[2,1,3], 
	[3,2,1]
] */
```

*Example 2:*
```sqf
matrixTranspose 
[
	[1,2,3]
];
/* returns 
[
	[1],
	[2],
	[3]
] */
```

*Example 3:*
```sqf
matrixTranspose 
[
	[1],
	[2],
	[3]
];
/* returns 
[
	[1,2,3]
] */
```