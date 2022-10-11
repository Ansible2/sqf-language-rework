Sets given event handler of given display.
The return code of the provided function should indicate whether this event was handled correctly. This implies telling the engine whether it is default code should be executed. 
See `User Interface Event Handlers` for the full list of handler names.<br>
If applicable, see `DIK KeyCodes` for a list of key code constants, which are relevant to key related user interface events like {{HashLink|User Interface Event Handlers#onKeyDown|onKeyDown}} and {{HashLink|User Interface Event Handlers#onKeyUp|onKeyUp}}.


---
*Example 1:*
```sqf
_control displaySetEventHandler ["KeyDown", ""];
```

*Example 2:*
**init.sqf**:

```sqf
KeysPressed = compile preprocessFile "keysPressed.sqf";
private _display = findDisplay 46;
_display displaySetEventHandler ["KeyDown", "_this call KeysPressed"];
```

**keysPressed.sqf**:

```sqf
private _handled = false;
switch (_this select 1) do {
	// F key
	case 33: {
		// code here
		_handled = true;
	};
};
_handled;
```