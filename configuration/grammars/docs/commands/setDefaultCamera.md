Sets the position and direction for the camera used after camera is set on no object (log out view when leaving MP game for example)


---
*Syntaxes:*

`setDefaultCamera` [position, direction]

---
*Example 1:*

```sqf
setDefaultCamera [[5000, 5000, 200], [1, 1, -1]];
```

*Example 2:*

Lift camera 100m up above current player position and point downwards:

```sqf
setDefaultCamera [ATLToASL (player modelToWorld [0, 0, 100]), [0, 0, -1]];
```