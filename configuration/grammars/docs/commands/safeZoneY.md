[[Image:safezone.jpg|right|600px]] Returns the Y of the top border of the screen, which is also a distance in screen measurement units from top left corner of the default viewport (0,0) of the screen to the top border of the screen.
Since it is going in opposite way of the Y axis, <u>the value is negative</u>. The measurement units depend on the current screen resolution `getResolution`. See also `SafeZone`.


---
*Example 1:*
```sqf
_screenTopBorderY = safeZoneY; // returns a float value < 0
```

*Example 2:*
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