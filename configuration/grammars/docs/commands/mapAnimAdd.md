Add next frame to map animation.


---
*Syntaxes:*

`mapAnimAdd` [time, zoom, position]

---
*Example 1:*

```sqf
mapAnimAdd [1, 0.1, markerPos "anim1"];
mapAnimCommit;
```

*Example 2:*

```sqf
mapAnimAdd [3, 0.01, player];
mapAnimCommit;
```