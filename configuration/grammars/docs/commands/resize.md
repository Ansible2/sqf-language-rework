Changes the size of the given array. The command does not return new array, it resizes the source array to the desired number of elements.
If the new size is bigger than the current size, the new places are filled with `nil`. The <See Link Reference alternative syntax> allows to fill resized positions with a given value. `Array` and `HashMap` values are copied.


---
*Syntaxes:*

array `resize` count

array `resize` [count, fill]

---
*Example 1:*

```sqf
_arrayNum = [0,1,2,3,4];
_arrayNum resize 2; // _arrayNum is now [0, 1]
_arrayNum resize 5; // _arrayNum is now [0, 1, nil, nil, nil]
```

*Example 2:*

```sqf
private _array = [0, 1, 2];
_array resize [5, -1]; // _array is now [0, 1, 2, -1, -1]

private _array = [0, 1, 2];
_array resize [1, -1]; // _array is now [0]

private _array = [0, 1, 2];
_array resize [4, "something"]; // _array is now [0, 1, 2, "something"]
```