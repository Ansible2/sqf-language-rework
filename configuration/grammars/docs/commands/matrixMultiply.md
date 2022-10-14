[[Image:matrixMultiply.jpg|right|600px]]
Returns resulting matrix from the [multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication) of two matrices. First matrix must be of the size n &times; `k`, while the second must be of the size `k` &times; m, i.e **columns}} matrix1 == {{hl|rows** matrix2. The resulting matrix will be of the size n &times; m. If the shapes do not match, empty array [] will be returned.


---
*Syntaxes:*

matrix1 `matrixMultiply` matrix2

---
*Example 1:*

```sqf
[
	[2],
	[2]
] 
matrixMultiply 
[ 
	[3] 
]
/* returns 
[
	[6],
	[6]
] */
```

*Example 2:*

```sqf
[
	[-1,0,0],
	[0,-1,0]
] 
matrixMultiply 
[
	[1,2],
	[3,1],
	[2,3]
] 
/* returns 
[
	[-1,-2],
	[-3,-1]
] */
```