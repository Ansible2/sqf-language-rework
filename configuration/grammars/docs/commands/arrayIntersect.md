Intersects array1 with array2 returning array of unique common elements. Additionally, using the same array for array1 and array2 will simply return array of unique elements. Intersects only 1st dimension of an array.


---
*Syntaxes:*

array1 `arrayIntersect` array2

---
*Example 1:*

```sqf
_arr1 = [1,2,3,4,5,2,3,4];
_arr2 = [4,5,6,1,2,3,5,6];
hint str (_arr1 arrayIntersect _arr2); // [4,5,1,2,3]
```

*Example 2:*

```sqf
_arr = [1,2,3,1,2,3,1,2,3,4,5];
hint str (_arr arrayIntersect _arr); // [1,2,3,4,5]
```

*Example 3:*

Remove `nil`s:

```sqf
hint str ([1,2,nil,3] arrayIntersect [1,2,nil,3]); // [1,2,3]
```

*Example 4:*

Also works with array elements which are `equal`:

```sqf
hint str ([[1],[2],[3]] arrayIntersect [[2],[3],[4]]); // [[2],[3]]
```

*Example 5:*

This command is case-sensitive:

```sqf
["cAse"] arrayIntersect ["cAse"]; // ["cAse"]
["cAse"] arrayIntersect ["casE"]; // []
```