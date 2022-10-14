Returns the array element with `min`imum numerical value. Engine solution to `BIS_fnc_lowestNum` and `BIS_fnc_findExtreme`. Therefore it is expected that supplied array consists of `Number`s only.  `Boolean`s however are also supported and will be evaluated as `Number`s: `true` - 1, `false` - 0. `nil` value treated as 0.


---
*Syntaxes:*

`selectMin` array

---
*Example 1:*

```sqf
_min = selectMin [1,2,3,4,5]; //1
```

*Example 2:*

```sqf
// Same as, for example: 
_min = _a min _b min _c min _d;
// Only faster:
_min = selectMin [_a,_b,_c,_d];
```