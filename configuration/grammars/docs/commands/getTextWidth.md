Returns estimated width of the text based on `font type` and size. Similar to `ctrlTextWidth` but does not require a control and can be used to estimate text width for any control including buttons. Result does not include left and right margins (hardcoded at 0.008 each).


---
*Example 1:*
```sqf
_textWidth = "Hello World" getTextWidth ["PuristaMedium", 0.03];
```

*Example 2:*
```sqf
_textWidthInclMargins = ("Hello World" getTextWidth ["PuristaMedium", 0.03]) + 0.016;
```

*Example 3:*
```sqf
#define MARGINS 0.0016
private _ctrl = findDisplay 46 ctrlCreate ["RscText", -1];
_ctrl ctrlSetText "TestString";
_ctrl ctrlSetFont "PuristaMedium";
_ctrl ctrlSetFontHeight 0.04;
ctrlTextWidth _ctrl == ("TestString" getTextWidth ["PuristaMedium", 0.04]) + MARGINS; // true
```