Converts world coordinates into map screen coordinates. This command is identical to `ctrlMapWorldToScreen`.


---
*Syntaxes:*

map `posWorldToScreen` position

---
*Example 1:*

```sqf
_screenCoord = _control posWorldToScreen _worldCoord;
```

*Example 2:*

```sqf
_screenCoord = _control posWorldToScreen position player;
```