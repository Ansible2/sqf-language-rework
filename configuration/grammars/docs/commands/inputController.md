Returns the state of controller inputs. The controller is a standard XBOX controller which is selected with Windows XBOX controller scheme. The input can be:
{{Columns|4|
* XBOX_A 0
* XBOX_B 1
* XBOX_X 2
* XBOX_Y 3
* XBOX_Up 4
* XBOX_Down 5
* XBOX_Left 6
* XBOX_Right 7
* XBOX_Start 8
* XBOX_Back 9
* XBOX_LeftBumper 10
* XBOX_RightBumper 11
* XBOX_LeftTrigger 12
* XBOX_RightTrigger 13
* XBOX_LeftThumb 14
* XBOX_RightThumb 15
* XBOX_LeftThumbXRight 16
* XBOX_LeftThumbYUp 17
* XBOX_RightThumbXRight 18
* XBOX_RightThumbYUp 19
* XBOX_LeftThumbXLeft 20
* XBOX_LeftThumbYDown 21
* XBOX_RightThumbXLeft 22
* XBOX_RightThumbYDown 23


---
*Example 1:*
State of the fire trigger:

```sqf
onEachFrame { hintSilent str inputController 13 };
```