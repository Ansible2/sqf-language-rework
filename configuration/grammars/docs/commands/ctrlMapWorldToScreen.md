Converts world coordinates into map screen coordinates. This command is identical to `posWorldToScreen`.


---
*Syntaxes:*

control `ctrlMapWorldToScreen` position

---
*Example 1:*

```sqf
_screenCoord = _control ctrlMapWorldToScreen _worldCoord;
```

*Example 2:*

```sqf
_screenCoord = _control ctrlMapWorldToScreen position player;
```