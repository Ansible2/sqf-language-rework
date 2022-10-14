Compares types of all elements of one array to types of all elements of another array. Since Arma 3 v2.09.149634 no additional check is needed to make sure the first argument is an `Array`.


---
*Syntaxes:*

arr1 `isEqualTypeArray` arr2

---
*Example 1:*

```sqf
_arr = [1,true,"three"];
_arr isEqualTypeArray [0,objNull,""]; // false
_arr isEqualTypeArray [0,false,""]; // true
```

*Example 2:*

```sqf
_arr = [1,2];
_arr isEqualTypeArray [0]; // false
_arr isEqualTypeArray [0,0]; // true
_arr isEqualTypeArray [0,0,0]; // false
```