Finds duplicates in the given array of anything and consolidates them into an array of sub-arrays


---
*Syntaxes:*

array call `BIS_fnc_consolidateArray`

---
*Example 1:*

```sqf
["apple","apple","pear","pear","apple"] call BIS_fnc_consolidateArray; // return: `"apple",3],["pear",2`
```

*Example 2:*

```sqf
["apple","apple",1,1,nil,nil] call BIS_fnc_consolidateArray; // return: `"apple",2],[1,2],[any,2`
```