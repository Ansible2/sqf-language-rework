Converts RGB color format to procedural texture, e.g **[0,0,0,1]}} becomes {{hl|"#(argb,8,8,3)color(0,0,0,1)"**.<br>
Values are in range 0..1.


---
*Syntaxes:*

color call `BIS_fnc_colorRGBAtoTexture`

---
*Example 1:*

```sqf
private _texture = [0,0,0,1] call BIS_fnc_colorRGBAtoTexture;
```