Interpolates vector between the given `vectorFrom` and `vectorTo` value according to the given range value.


---
*Syntaxes:*

`vectorLinearConversion` [rangeFrom, rangeTo, rangeValue, vectorFrom, vectorTo, clip]

---
*Example 1:*

```sqf
vectorLinearConversion [0, 1, 0.5, [0,0,0], [25,50,100], false];	// [12.5,25,50]
```

*Example 2:*

```sqf
vectorLinearConversion [0, 1, 100, [0,0,0], [25,50,100], true];	// [25,50,100]
```

*Example 3:*

```sqf
vectorLinearConversion [0, 1, 100, [0,0,0], [25,50,100], false];	// [2500,5000,10000]
```