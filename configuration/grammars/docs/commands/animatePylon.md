Force animation of pylon to given state, -1 for reset to engine handling, can cause weapon inoperative, because weapon is released  when pylon state == 1.


---
*Syntaxes:*

vehicle `animatePylon` [pylon, animphase, instant]

---
*Example 1:*

```sqf
vehicle player animatePylon [1, 0.5];
```

*Example 2:*

```sqf
vehicle player animatePylon ["pylon1", 0.5];
```

*Example 3:*

```sqf
vehicle player animatePylon ["pylon1", 1, true];
```