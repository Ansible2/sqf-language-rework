Sorts an array of numbers from lowest (left) to highest (right). The passed array is modified by reference.
This function uses the quick sort algorithm.


---
*Syntaxes:*

array call `BIS_fnc_sortNum`

---
*Example 1:*

```sqf
[5,9,987,6,97,8,6] call BIS_fnc_sortNum; // returns [5,6,6,8,9,97,987]
```