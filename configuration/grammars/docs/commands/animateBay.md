Forces animation of bay to given state, -1 for reset to engine handling, can cause weapon inoperative, because weapon is released when bay state == 1.
{{Feature|informative|While there is no getter to read the animation phase of the given bay, `animationPhase` command can be used with the individual bay door name from `animationNames` as a workaround.
For example, for the UCAV Sentinel:
<sqf>ucav animateBay [1, 1];
// can be checked with
ucav animationPhase "weapons_bay_l_1"
// or
ucav animationPhase "weapons_bay_l_2"
</sqf>


---
*Example 1:*
```sqf
vehicle player animateBay [1, 0.5];
```

*Example 2:*
```sqf
vehicle player animateBay [1, 1, true];
```