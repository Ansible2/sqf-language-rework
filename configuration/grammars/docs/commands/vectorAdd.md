Adds two 3D vectors. Replaces `BIS_fnc_vectorAdd`.


---
*Example 1:*
```sqf
hint str (velocity unit1 vectorAdd velocity unit2);
```

*Example 2:*
```sqf
[5,10,5] vectorAdd [5,5,10]; //  returns [10,15,15]
```

*Example 3:*
```sqf
[0,0] vectorAdd [1,-2]; //  returns [1,-2,0]
```