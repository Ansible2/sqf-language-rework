Sets custom camera aperture when HDR is enabled ([-1] to do it automatically). <nowiki>`minimum` should be <= `standard` and <= `maximum`</nowiki>.


---
*Syntaxes:*

`setApertureNew` [minimum, standard, maximum, luminance]

---
*Example 1:*

```sqf
setApertureNew [0.3, 0.2, 0.1, 1];
```

*Example 2:*

Simulate eye adjustment at night:

```sqf
setDate [2016, 8, 10, 4, 0];
setApertureNew [2, 8, 14, 0.9];
```

*Example 3:*

Narrower range for a subtler effect:

```sqf
setDate [2016, 8, 10, 4, 0];
setApertureNew [2, 5, 9, 0.8];
```