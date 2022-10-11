Performs strict comparison between var1 and var2 and returns `true` if equal, otherwise `false`. Strict means that it would check that both arguments are of the same data type and then compare the values.<br><br>
Some differences between `isEqualTo` and `==`:
* It performs case sensitive comparison on `String`s
* It doesn't throw error when comparing different types, i.e. ("eleven" `isEqualTo` 11)
* It can compare `Array`s, `Script`s and `Boolean`s (`alive` `player` `isEqualTo` `true`)
* It can compare non-existent game objects (`grpNull` `isEqualTo` `grpNull`)
* It can compare `Namespace`s (`As of Arma 3 v1.47`)
* It is slightly faster than `==`, especially when comparing `String`s


---
*Example 1:*
```sqf
_arr1 = [1,[2,[3]]];
_arr2 = [1,[2,[3]]];
if (_arr1 isEqualTo _arr2) then {hint "Arrays match!"}
```

*Example 2:*
```sqf
if (a isEqualTo b) then {hint "a is equal to b"};
if !(a isEqualTo b) then {hint "a is not equal to b"};
```