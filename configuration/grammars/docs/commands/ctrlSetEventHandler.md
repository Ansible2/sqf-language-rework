Sets given event handler of given control: any previously added event handler is removed.

{{Feature|informative|
* See `User Interface Event Handlers` for the full list of handler names
* See also `DIK KeyCodes` for a list of key code constants relevant to key-related events like `KeyDown` and `KeyUp`


---
*Example 1:*
```sqf
_control ctrlSetEventHandler ["KeyDown", ""];
```

*Example 2:*
```sqf
(_display displayCtrl 108) ctrlSetEventHandler ["LBSelChanged","['ListChange',_this] call FireEvents"];
```