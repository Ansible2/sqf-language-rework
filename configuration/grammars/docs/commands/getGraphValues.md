Generate graph y - coordinates of all input values within specific x and y range.


---
*Syntaxes:*

`getGraphValues` <nowiki>[[graphMinX, graphMaxX, graphMinY, graphMaxY, valueCount, randomOffset], x1, y1, x2, y2, ... xn, yn]</nowiki>

---
*Example 1:*

```sqf
private _minX = 0;
private _maxX = 10;
private _minY = 0;
private _maxY = 100;
private _count = 11;
private _random = 0;

getGraphValues [
	[_minX, _maxX, _minY, _maxY, _count, _random],
	0, 5,
	1, 10,
	2, 100,
	3, 50,
	4, 30,
	5, 100,
	6, 10,
	7, 50,
	8, 75,
	9, 100,
	10, 100
];
/*
	returns [[0.05, 0.1, 1, 0.5, 0.3, 1, 0.1, 0.5, 0.75, 1, 1], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
	supposedly [array of 1-based Y values, array of X values]
*/
```