Return texture information - resolution in pixels and average colour. Multiply the pixel values by `pixelW` and `pixelH` to get screen coordinates.


---
*Syntaxes:*

`getTextureInfo` texture

---
*Example 1:*

```sqf
getTextureInfo "a3\characters_f\blufor\data\clothing1_co.paa"; // [2048, 2048, [0.458824, 0.427451, 0.34902, 1]]
```