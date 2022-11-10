Converts [HSL colour format](https://en.wikipedia.org/wiki/HSL and HSV) to RGB.


---
*Syntaxes:*

[hue, saturation, lightness] call `BIN_fnc_colorHSLtoRGB`

---
*Example 1:*

```sqf
private _rgb = [0, 100, 50] call BIN_fnc_colorHSLtoRGB;
```