Converts given, formatted as simple array, `String` into a valid `Array`. Simple array is array consisting of `Number`s, `String`s, `Boolean`s and `Array`s of all of the above.
This command is almost `4&times; faster` than similar uncached `call` `compile` method. And because `call` `compile` is not required, it is also `more secure` and primarily intended for use with `callExtension` to parse the `String` output into `Array`.<br>
<br>
Since <See arm Reference 3> v1.96 the command will tolerate extra spaces and supports single quotes. The only recognised keywords (case `in`sensitive) are:
* **true** - translates into `true`
* **false** - translates into `false`
* **nil** - translates into `nil`
* **null** - translates into `nil`
* **<null>** - translates into `nil`
* **any** - translates into `nil`


---
*Example 1:*
```sqf
private _arr = parseSimpleArray "[1,2,3]";
```

*Example 2:*
```sqf
private _array1 = [1, "2", true, [4, "five", false]];
private _array2 = parseSimpleArray "[1,""2"",true,[4,""five"",false]]";
_array1 isEqualTo _array2; // true
```

*Example 3:*
```sqf
_bool = true;
_num = 123.45;
_str = "ok";
_arr = [1, false, "cool"];
_res = parseSimpleArray format ["[%1,%2,%3,%4]", _bool, _num, str _str, str _arr];
// note how _bool and _num do not need str, however if used anyway, the result in this case would be identical
hint str _res;  // returns [true,123.45,"ok",[1,false,"cool"]]
```