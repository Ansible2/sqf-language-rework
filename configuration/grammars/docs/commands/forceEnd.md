Forces mission ending (set with `endMission`) even if a camera effect or any another condition delays the endMission (mostly in `{{ofp}}`).


---
*Syntaxes:*

`forceEnd`

---
*Example 1:*

```sqf
forceEnd;// in an ending trigger to ensure no camera is delaying mission ending
```