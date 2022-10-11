[[Image:safezone.jpg|right|600px]]
Returns the width of the screen in screen measurement units. Taken from top left corner of the default viewport (0,0) of the screen and going in the same direction as the X axis, the value will be positive but resulting X will end up beyond the right border. Therefore in order to calculate X of the right screen border, the length of `safeZoneX` must be subtracted from `safeZoneW`, but because it is negative, it must be added instead. {{hl


---
*Example 1:*
```sqf
_screenWidth = safeZoneW;
```

*Example 2:*
```sqf
_screenLeftBorderX = safeZoneX;
_screenRightBorderX = safeZoneW + safeZoneX;
```

*Example 3:*
Create control 50% wide, 30% tall, centered on screen:

```sqf
private _ctrl = findDisplay 46 createDisplay "RscDisplayEmpty" ctrlCreate ["RscText", -1];
_ctrl ctrlSetBackgroundColor [1,0,0,0.5];
private _ctrlWidth = 0.5 * safeZoneW; // 50% of screen width
private _ctrlHeight = 0.3 * safeZoneH; // 30% of screen height
_ctrl ctrlSetPositionW _ctrlWidth;
_ctrl ctrlSetPositionH _ctrlHeight;
_ctrl ctrlSetPositionX ((safeZoneW - _ctrlWidth) / 2 + safeZoneX); // center it horizontally
_ctrl ctrlSetPositionY ((safeZoneH - _ctrlHeight) / 2 + safeZoneY); // center it vertically
_ctrl ctrlCommit 0;
```