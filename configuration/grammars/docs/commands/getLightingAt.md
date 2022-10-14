Gets provided object's lighting information.


---
*Syntaxes:*

`getLightingAt` obj

---
*Example 1:*

```sqf
getLightingAt player; // returns [[1,1,1], 0.5, [0,0,0], 0]
```

*Example 2:*

```sqf
getLightingAt player params ["_ambientLightColour", "_ambientLightBrightness", "_dynamicLightColour", "_dynamicLightBrightness"];
```