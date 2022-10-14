Compares type of given value to every type in the given array and if match is found, `true` is returned.


---
*Syntaxes:*

val `isEqualTypeAny` types

---
*Example 1:*

```sqf
_var = [1, 2, 3];
_var isEqualTypeAny [0, "", objNull]; //false
_var isEqualTypeAny [0, "", objNull, []]; //true
```