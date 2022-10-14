Forces animation of bay to given state, -1 for reset to engine handling, can cause weapon inoperative, because weapon is released when bay state == 1.


---
*Syntaxes:*

vehicle `animateBay`  [bay, animphase, instant]

---
*Example 1:*

```sqf
vehicle player animateBay [1, 0.5];
```

*Example 2:*

```sqf
vehicle player animateBay [1, 1, true];
```