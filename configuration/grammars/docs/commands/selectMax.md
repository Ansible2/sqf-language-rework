Returns the array element with `max`imum numerical value. Engine solution to `BIS_fnc_greatestNum` and `BIS_fnc_findExtreme`. Therefore it is expected that supplied array consists of `Number`s only. `Boolean`s however are also supported and will be evaluated as `Number`s: `true` - 1, `false` - 0.  `nil` value treated as 0.


---
*Syntaxes:*

`selectMax` array

---
*Example 1:*

```sqf
_max = selectMax [1,2,3,4,5]; //5
```

*Example 2:*

```sqf
// Same as, for example: 
_max = _a max _b max _c max _d;
// Only faster:
_max = selectMax [_a,_b,_c,_d];
```