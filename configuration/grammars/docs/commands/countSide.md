Returns how many units in the given array belong to given side.


---
*Syntaxes:*

side `countSide`  array

---
*Example 1:*

```sqf
_num = west countSide list _triggerOne;
```

*Example 2:*

```sqf
_numCivPlayable = civilian countSide playableUnits;
```