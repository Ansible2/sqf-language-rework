Terminates the effect in the given layer by fading it out according to the given duration. If named layer is used and it doesn't exist, it will be allocated. For title layer see `titleFadeOut`.


---
*Example 1:*
```sqf
0 cutFadeOut 2;
```

*Example 2:*
```sqf
private _layer = "layer1" cutFadeOut 2;
```